<h1 align="center">
<br>
  <img src="https://d33wubrfki0l68.cloudfront.net/2e87d126358935e3c9984030c481fc79197e3daa/support.b363d5ad.png" alt="프로젝트 로고" />
  <br>
    <br>
  nestj-sbolierplate-project
  <br>
</h1>

## 😺 프로젝트 소개

NestJS는 크게 Provider, Controller, Module로 분리하며, 컴포넌트들끼리의 조합(DI)을 통해 <br> 
애플리케이션을 개발하기 위해 필요한 boilerplate 입니다. <br>
기본 TypeScript를 사용하도록 구성되어 있으며, <br>
현재 최신 버전인 nestjs v10버전에 맞춰서 사용하도록 구성되어 있습니다. <br>

##  📂  프로젝트 구조
boilerplate project 구조는 크게 database, src, test, typings으로 구성되어있습니다.<br>
database는 ORM에 따른 migration 폴더로 구성되며 <br>
src는 크게 api, common, config, shared로 구성되어지며 api는 기능에 따라 module API가 작성되는 곳이며 <br>
common은 프로젝트 공통에 대한 기능관리가 이루어지는 곳입니다.
config는 프로젝트 환경설정이 관리 되는곳입니다. <br>
shared는 global 모듈이 존재하는 곳으로 전역으로 관리되는 모듈을 관리하는 곳입니다.

- project
```
•
├──📁 database // migrations
├──📁 dist // Source build
├──📁 src
│   ├──📁 api // Module 구조 
│   ├──📁 common // Global Nest Module
│   │   ├──📁 constants // Constant value and Enum
│   │   ├──📁 decorators // Nest Decorators
│   │   ├──📁 entity // Entities
│   │   ├──📁 filters // Nest Filters
│   │   ├──📁 guards // Nest Guards
│   │   ├──📁 interceptors // Nest Interceptors
│   │   ├──📁 middleware // Nest Middleware
│   │   ├──📁 pipes // Nest Pipes
│   │   ├──📁 providers // Nest Providers(ex. aws, database, redis ...)
│   │   ├──📁 repositories // Nest Repositorys
│   │   ├──📁 utils // utils
│   │   ├──📄 common.moudles.ts    
│   ├──📁 config // Environment Configuration
│   ├──📁 shared // Shared Nest Modules
│   ├──📄app.middleware.ts
│   ├──📄app.modules.ts
├──📄app.ts
├──📁test // Jest testing
├──📁typings // Modules and global type definitions

```

- Module structure
```
// example users
├──📁 src/api/users
│   ├──📁 dto
│   └──📄 users.constant.ts
│   └──📄 users.controller.ts
│   └──📄 users.service.ts
│   └──📄 users.module.ts
```

## 프로젝트 기능
🐳 Docker  - 컨테이너 플랫폼
♻️ Nginx - 웹 서버
✨ ESLint, Prettier - 정적 코드 분석 및 코드 스타일 변환

📗 Swagger -  API 문서화

🔮 PM2 :: 웹 애플리케이션을 운영 및 프로세스 관리자