## Curso Serverless Udemy

- https://www.udemy.com/course/aws-lambda-serverless-architecture

## Comandos
```
aws s3 cp resize-images.zip s3://alexgalhardo-curso-udemy-serverless-images/resize-images.zip
```

```
aws lambda update-function-code --function-name resizeImages --s3-bucket alexgalhardo-curso-udemy-serverless-images --s3-key resize-images.zip --publish
```

## Docs
- https://www.datadoghq.com/state-of-serverless/
- https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html
- https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html
- https://aws.amazon.com/lambda/pricing/
- https://aws.amazon.com/dynamodb/pricing/
- https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-authorization-flow.html#apigateway-resource-policies-iam-policies-interaction

### Repos
- https://aws.amazon.com/pt/serverless/serverlessrepo/
- https://www.serverless.com/examples

## Tools
- https://test-cors.org/

## Siglas
- WCU = Write capacity units
- RCU = Read capacity units
- The free tier for DynamoDB provides 25GB of storage, along with 25 provisioned Write and 25 provisioned Read Capacity Units (WCU, RCU) which is enough to handle 200M requests per month.

### Aws Lambda CLI Commands
- https://docs.aws.amazon.com/cli/latest/reference/lambda/

Getting Started with AWS: https://aws.amazon.com/getting-started/?nc2=h_l2_cc

AWS Overview: https://aws.amazon.com/

What is Cloud Computing? => https://aws.amazon.com/what-is-cloud-computing/?nc2=h_l2_cc

Information about the Infrastructure AWS offers: https://aws.amazon.com/about-aws/global-infrastructure/?nc2=h_l2_cc

Understanding Regions & Availability Zones (that dropown on the top right!): http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions

The Pricing of AWS (and the Free Tier): https://aws.amazon.com/pricing/?nc2=h_ql_ny_livestream_blu

AWS Cloud Security: https://aws.amazon.com/security/

Securing AWS with IAM: https://aws.amazon.com/iam/?nc2=h_l3_dmhttps://aws.amazon.com/iam/?nc2=h_l3_dm

## More Info about the Core Services
No worries, we'll dive into all the core serverless services throughout the course.

If you want to find all these services in your AWS Management Console though, you have to expand "All Services". Then, the core services can be found amongst all the other services.


If you already want to get a brief overview, you can have a look at the following links. But keep in mind: We're going to dive into all these services in this course!

S3 => https://aws.amazon.com/s3/?nc2=h_m1

API Gateway => https://aws.amazon.com/api-gateway/?nc2=h_m1

Lambda => https://aws.amazon.com/lambda/?nc2=h_m1

DynamoDB => https://aws.amazon.com/dynamodb/?nc2=h_m1

Cognito => https://aws.amazon.com/cognito/?nc2=h_m1

Route 53 => https://aws.amazon.com/route53/?nc2=h_m1

CloudFront => https://aws.amazon.com/cloudfront/?nc2=h_m1


## Access
AWS access portal URL
https://d-9067f8192b.awsapps.com/start
Username
serverless-admin serverless-admin-BR123


```
aws lambda help
```

```
aws sts get-caller-identity
```

# SLS Cli Commands
- Create new serverless project using cli and nodejs template
```bash
sls create -t aws-nodejs -p hello-serverless
```

## Invoke an function
```bash
sls invoke local -f hello
```

## Invoke an function with event
```bash
sls invoke local -f hello -d '{"key": "value"}'
```

## Deploy changing stage to prod
```bash
sls deploy -s prod
```

## Deploy only add function
```bash
sls deploy -s prod -f add
```

## Serverless Offline
```bash
sls offline
```

## See Serverless Logs
```bash
sls logs -f add -s prod --startTime 5m
```

## See Serverless Logs
```bash
sls logs -f add -s prod --tail
```