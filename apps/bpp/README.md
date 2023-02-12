# Beckn Provider Platform (BPP)
This is a NestJS based server for the [BPP side](https://developers.becknprotocol.io/docs/introduction/transactional-layer/). It connects to the providers downstream, currently only one - Swayam.

## Directory Structure
```
.
├── README.md
├── src
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── cancel
│   ├── confirm
│   ├── init
│   ├── main.ts
│   ├── rating
│   ├── search
│   ├── select
│   ├── status
│   ├── support
│   ├── track
│   ├── update
│   └── utils
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
└── tsconfig.app.json
```

Where `cancel`, `confirm`, `init`, `rating`, `search`, `select`, `status`, `support`, `track`, `update` are beckn keywords getting tracked in separate folders.

## TODO
- [ ] Fix Swagger Doc for NestJS
- [ ] Validation for requests using OpenAPI Spec - similar to protocol server.
- [ ] Unit Tests 
