# nestjs-boilerplate-project




##  프로젝트 구조
```
•
├──📁dist // Source build
├──📁src
│   ├──📁api // Module structure
│   ├──📁common // Global Nest Module
│   │   ├──📁 constants // Constant value and Enum
│   │   ├──📁 decorators // Nest Decorators
│   │   ├──📁 filters // Nest Filters
│   │   ├──📁 guards // Nest Guards
│   │   ├──📁 interceptors // Nest Interceptors
│   │   ├──📁 middleware // Nest Middleware
│   │   ├──📁 pipes // Nest Pipes
│   │   ├──📁 providers // Nest Providers
│   │   ├──📁 repositories // Nest Repositorys
│   ├──📁config // Environment Configuration
│   ├──📁entity // Entities
│   ├──📁shared // Shared Nest Modules
├──📁test // Jest testing
├──📁typings // Modules and global type definitions
├──📄app.middleware.ts
├──📄app.modules.ts
├──📄app.ts

```

```
// Module structure
// example users
├──📁 src/api/users
│   ├──📁 dto
│   └──📄 users.constant.ts
│   └──📄 users.controller.ts
│   └──📄 users.service.ts
│   └──📄 users.module.ts
```