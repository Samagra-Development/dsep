# Beckn Application Platform
This is a NestJS based server for the [BAP side](https://developers.becknprotocol.io/docs/introduction/transactional-layer/).

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
│   ├── on_cancel
│   ├── on_confirm
│   ├── on_init
│   ├── on_rating
│   ├── on_search
│   ├── on_select
│   ├── on_status
│   ├── on_support
│   ├── on_track
│   ├── on_update
│   └── Resp.dto.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
└── tsconfig.app.json
```

Where `on_cancel`, `on_confirm`, `on_init`, `on_rating`, `on_search`, `on_select`, `on_status`, `on_support`, `on_track`, `on_update` are beckn keywords getting tracked in separate folders.

## TODO
- [ ] Fix Swagger Doc for NestJS
- [ ] Validation for requests using OpenAPI Spec - similar to protocol server. 
- [ ] Unit Tests
