import { withSwagger } from 'next-swagger-doc';

const swaggerHandler = withSwagger({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World Plugin API',
      version: '1.0.0',
    },
    components: {
      schemas: {}
    },
  },
  apiFolder: 'pages/api',
});

export default swaggerHandler();
