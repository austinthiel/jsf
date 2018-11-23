# jsf
The jugglesf.com website


# Get started
`git clone https://github.com/austinthiel/jsf.git`

`cd jsf/packages/jsf-react`

`npm i && npm start`

# React Deployment
You will never be able to run a deployment, but for documentation purposes:

The site lives in an S3 bucket. To make a deployment, you need to install and configure `s3cmd` with the s3 bucket keys. Then, from `jsf-react`, use `npm run build-and-deploy` to automatically build the package and upload it to s3. The site will update immediately.
