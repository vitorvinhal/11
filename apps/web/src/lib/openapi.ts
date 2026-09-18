/**
 * FASE 27 — OpenAPI/Swagger Docs
 *
 * Gerador de documentação OpenAPI 3.0 para todas as APIs do projeto.
 * Pode ser servido em /api/docs ou exportado como JSON.
 */

export interface OpenAPISchema {
  openapi: string;
  info: {
    title: string;
    description: string;
    version: string;
    contact?: { name: string; url: string; email?: string };
  };
  servers: Array<{ url: string; description: string }>;
  paths: Record<string, Record<string, unknown>>;
  components: {
    securitySchemes: Record<string, unknown>;
    schemas: Record<string, unknown>;
  };
}

const securitySchemes = {
  BearerAuth: {
    type: "http",
    scheme: "bearer",
    bearerFormat: "JWT",
    description: "Supabase JWT token",
  },
};

const schemas = {
  Error: {
    type: "object",
    properties: {
      error: { type: "string" },
      requestId: { type: "string" },
    },
  },
  HealthStatus: {
    type: "object",
    properties: {
      status: { type: "string", enum: ["ok", "degraded", "error"] },
      version: { type: "string" },
      uptime: { type: "number" },
      services: {
        type: "object",
        properties: {
          database: { type: "string" },
          memory: { type: "string" },
          cache: { type: "string" },
        },
      },
    },
  },
  Plugin: {
    type: "object",
    properties: {
      id: { type: "string" },
      name: { type: "string" },
      enabled: { type: "boolean" },
      riskLevel: {
        type: "string",
        enum: ["low", "medium", "high", "critical"],
      },
    },
  },
  Skill: {
    type: "object",
    properties: {
      id: { type: "string" },
      name: { type: "string" },
      enabled: { type: "boolean" },
    },
  },
  Memory: {
    type: "object",
    properties: {
      id: { type: "string" },
      userId: { type: "string" },
      content: { type: "string" },
      type: { type: "string" },
      createdAt: { type: "string", format: "date-time" },
    },
  },
  Webhook: {
    type: "object",
    properties: {
      id: { type: "string" },
      url: { type: "string", format: "uri" },
      events: { type: "array", items: { type: "string" } },
      active: { type: "boolean" },
    },
  },
};

const paths = {
  "/api/health": {
    get: {
      tags: ["Health"],
      summary: "Verifica saúde do sistema",
      description: "Retorna status de todos os serviços",
      operationId: "getHealth",
      responses: {
        "200": {
          description: "Sistema saudável",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/HealthStatus" },
            },
          },
        },
      },
    },
  },
  "/api/health/plugins": {
    get: {
      tags: ["Health"],
      summary: "Status dos plugins",
      operationId: "getPluginsHealth",
      security: [{ BearerAuth: [] }],
      responses: {
        "200": { description: "OK" },
        "401": { description: "Não autorizado" },
      },
    },
  },
  "/api/plugins": {
    get: {
      tags: ["Plugins"],
      summary: "Lista todos os plugins",
      operationId: "listPlugins",
      security: [{ BearerAuth: [] }],
      responses: {
        "200": {
          description: "Lista de plugins",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Plugin" },
              },
            },
          },
        },
      },
    },
    patch: {
      tags: ["Plugins"],
      summary: "Atualiza plugins em batch",
      operationId: "batchUpdatePlugins",
      security: [{ BearerAuth: [] }],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                pluginIds: { type: "array", items: { type: "string" } },
                enabled: { type: "boolean" },
              },
            },
          },
        },
      },
      responses: {
        "200": { description: "Plugins atualizados" },
      },
    },
  },
  "/api/skills": {
    get: {
      tags: ["Skills"],
      summary: "Lista todas as skills",
      operationId: "listSkills",
      security: [{ BearerAuth: [] }],
      responses: {
        "200": {
          description: "Lista de skills",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Skill" },
              },
            },
          },
        },
      },
    },
    patch: {
      tags: ["Skills"],
      summary: "Atualiza skills em batch",
      operationId: "batchUpdateSkills",
      security: [{ BearerAuth: [] }],
      responses: {
        "200": { description: "Skills atualizadas" },
      },
    },
  },
  "/api/memories": {
    get: {
      tags: ["Memories"],
      summary: "Lista memórias do usuário",
      operationId: "listMemories",
      security: [{ BearerAuth: [] }],
      responses: {
        "200": {
          description: "Lista de memórias",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Memory" },
              },
            },
          },
        },
      },
    },
  },
  "/api/agent": {
    post: {
      tags: ["Agent"],
      summary: "Envia mensagem ao agente",
      operationId: "sendAgentMessage",
      security: [{ BearerAuth: [] }],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["message"],
              properties: {
                message: { type: "string" },
                stream: { type: "boolean" },
              },
            },
          },
        },
      },
      responses: {
        "200": { description: "Resposta do agente" },
      },
    },
  },
  "/api/export": {
    get: {
      tags: ["Data"],
      summary: "Exporta dados do usuário",
      operationId: "exportData",
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: "format",
          in: "query",
          schema: { type: "string", enum: ["json", "markdown"] },
        },
      ],
      responses: {
        "200": { description: "Dados exportados" },
      },
    },
  },
  "/api/import": {
    post: {
      tags: ["Data"],
      summary: "Importa dados em batch",
      operationId: "importData",
      security: [{ BearerAuth: [] }],
      responses: {
        "200": { description: "Dados importados" },
      },
    },
  },
  "/api/webhooks": {
    get: {
      tags: ["Webhooks"],
      summary: "Lista webhooks do usuário",
      operationId: "listWebhooks",
      security: [{ BearerAuth: [] }],
      responses: {
        "200": {
          description: "Lista de webhooks",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Webhook" },
              },
            },
          },
        },
      },
    },
    post: {
      tags: ["Webhooks"],
      summary: "Cria um webhook",
      operationId: "createWebhook",
      security: [{ BearerAuth: [] }],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["url", "events"],
              properties: {
                url: { type: "string", format: "uri" },
                events: { type: "array", items: { type: "string" } },
              },
            },
          },
        },
      },
      responses: {
        "201": { description: "Webhook criado" },
      },
    },
  },
  "/api/metrics": {
    get: {
      tags: ["System"],
      summary: "Métricas do sistema",
      operationId: "getMetrics",
      security: [{ BearerAuth: [] }],
      responses: {
        "200": { description: "Métricas" },
      },
    },
  },
  "/api/version": {
    get: {
      tags: ["System"],
      summary: "Versão do sistema",
      operationId: "getVersion",
      responses: {
        "200": { description: "Versão atual" },
      },
    },
  },
};

/**
 * Gera o documento OpenAPI completo.
 */
export function generateOpenApiDoc(): OpenAPISchema {
  return {
    openapi: "3.0.3",
    info: {
      title: "11 — AI Ecosystem API",
      description:
        "API do ecossistema autônomo de IA. Gerencia plugins, skills, memórias, agentes e mais.",
      version: "2.8.0-alpha",
      contact: {
        name: "11 Team",
        url: "https://github.com/vitorvinhal/11",
      },
    },
    servers: [
      { url: "http://localhost:3000", description: "Desenvolvimento" },
      { url: "https://11-five-umber.vercel.app", description: "Produção" },
    ],
    paths,
    components: {
      securitySchemes,
      schemas,
    },
  };
}

/**
 * Gera JSON do OpenAPI.
 */
export function getOpenApiJson(): string {
  return JSON.stringify(generateOpenApiDoc(), null, 2);
}

/**
 * Gera YAML simplificado do OpenAPI.
 */
export function getOpenApiYaml(): string {
  const doc = generateOpenApiDoc();
  let yaml = `openapi: "${doc.openapi}"\n`;
  yaml += `info:\n  title: "${doc.info.title}"\n  version: "${doc.info.version}"\n`;
  yaml += `servers:\n`;
  for (const server of doc.servers) {
    yaml += `  - url: "${server.url}"\n    description: "${server.description}"\n`;
  }
  yaml += `paths:\n`;
  for (const [path, methods] of Object.entries(doc.paths)) {
    yaml += `  ${path}:\n`;
    for (const [method, details] of Object.entries(methods)) {
      yaml += `    ${method}:\n      summary: "${(details as Record<string, unknown>).summary}"\n`;
    }
  }
  return yaml;
}
