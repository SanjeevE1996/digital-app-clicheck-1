#!/bin/bash

##################################################################################
# This script is used by the AWS Elastic beanstalk deployment.
#
# The purpose of this script is to export any required environment variables, and
# then rewrite the esure-env.js file with env vars from the elastic beanstalk
# environment, finally starting the nginx server
##################################################################################

echo "Exporting API_KEY environment variable by calling AWS parameter store..."
export API_KEY=$(aws ssm get-parameters --name /${ENV}/digital-app-clicheck/api-key --with-decryption --region eu-west-1 --query Parameters[0].Value --output text)

if [ "$API_KEY" = "None" ]; then
  echo "ERROR: Unable to obtain param name: /${ENV}/digital-app-clicheck/api-key"
  exit 1
fi

##################################################################################
# Print out the Git changes
##################################################################################
echo CHANGES..
if [ -f CHANGES ]; then
  cat CHANGES
else
  echo "CHANGES file did not exist"
fi

##################################################################################
# Assign the version
##################################################################################
echo "VERSION..."
if [ -f VERSION ]; then
  VERSION=$(<VERSION)
else
  VERSION="VERSION file did not exist"
fi
echo "$VERSION"

echo 'Setting NG environment file...'
ENVJS=dist/scripts/esure-env.js

cat <<HERE >$ENVJS
window['esure-env'] = {
	XAPI_URL: '${XAPI_URL}',
	API_KEY: '${API_KEY}',
	OKTA_CLIENT_ID: '${OKTA_CLIENT_ID}',
	OKTA_REDIRECT_URI: '${OKTA_REDIRECT_URI}',
	SITE_CAT_ACCOUNT: '${SITE_CAT_ACCOUNT}',
	VERSION: '${VERSION}'
};
HERE

cat $ENVJS

#######################################
echo 'Starting NGINX...'
exec nginx -g 'daemon off;'

#######################################
echo 'Done.'
