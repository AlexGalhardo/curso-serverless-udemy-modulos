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