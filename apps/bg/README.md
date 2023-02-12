# Beckn Gateway (BG)

This is just a mock BG to test out BPP and BAP. It currently is hardcoded at the env file for BAP and BAP which needs to be replaced with an [actual registry](https://github.com/beckn/registry).

Some sample implementation of registries are as follows

1. [Official Beckn Registry](https://github.com/beckn/reference-beckn-registry)
2. [NestJS Based Implemenation](https://github.com/Konnect-Agri/beckn-registry)

## Directory Structure
```
.
├── README.md
├── src
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   ├── on_search
│   └── search
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
└── tsconfig.app.json
```

## TODO
- [ ] Fix Swagger Doc for NestJS
- [ ] Validation for requests using OpenAPI Spec - similar to protocol server.
- [ ] Unit Tests 