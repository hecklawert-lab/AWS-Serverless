import boto3

#Edit the bucket name with your account ID
BUCKET = 'uploads-tasks-app-us-west-2-293207852040'

s3 = boto3.resource('s3')
bucket = s3.Bucket(BUCKET)
bucket.object_versions.delete()
