# [Udemy Serverless Course](https://www.udemy.com/course/aws-lambda-serverless-architecture)

## Docs
- https://www.datadoghq.com/state-of-serverless/
- https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html
- https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html
- https://aws.amazon.com/lambda/pricing/
- https://aws.amazon.com/dynamodb/pricing/
- https://docs.aws.amazon.com/cli/latest/reference/lambda/
- https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-authorization-flow.html#apigateway-resource-policies-iam-policies-interaction

## Repos
- https://aws.amazon.com/pt/serverless/serverlessrepo/
- https://www.serverless.com/examples

## Tools
- https://test-cors.org/
- https://dnschecker.org/

## Acronyms
- WCU = Write capacity units
- RCU = Read capacity units
- The free tier for DynamoDB provides 25GB of storage, along with 25 provisioned Write and 25 provisioned Read Capacity Units (WCU, RCU) which is enough to handle 200M requests per month.

## AWS CLI Commands
```
aws s3 cp resize-images.zip s3://alexgalhardo-curso-udemy-serverless-images/resize-images.zip
```

```
aws lambda update-function-code --function-name resizeImages --s3-bucket alexgalhardo-curso-udemy-serverless-images --s3-key resize-images.zip --publish
```

```
aws lambda help
```

```
aws sts get-caller-identity
```

## SLS CLI Commands
- Create new serverless project using cli and nodejs template
```bash
sls create -t aws-nodejs -p hello-serverless
```

- Invoke an function
```bash
sls invoke local -f hello
```

- Invoke an function with event
```bash
sls invoke local -f hello -d '{"key": "value"}'
```

- Deploy changing stage to prod
```bash
sls deploy -s prod
```

- Deploy only add function
```bash
sls deploy -s prod -f add
```

- Serverless Offline
```bash
sls offline
```

- See Serverless Logs
```bash
sls logs -f add -s prod --startTime 5m
```

- See Serverless Logs
```bash
sls logs -f add -s prod --tail
```

- Create domain
```bash
sls create_domain
```