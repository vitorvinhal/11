import { fileTool } from './file';
import { artifactsTool } from './artifacts';
import { testsTool } from './tests';
import { generateFullStack } from './codegen';
import { handleBridgeCommand } from './bridge';

export const tools = {
  ...fileTool,
  ...artifactsTool,
  ...testsTool,
  generateFullStack,
  handleBridgeCommand,
};

export * from './file';
export * from './artifacts';
export * from './tests';