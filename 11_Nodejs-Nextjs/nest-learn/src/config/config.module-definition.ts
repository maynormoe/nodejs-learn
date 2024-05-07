import { ConfigurableModuleBuilder } from '@nestjs/common';
import { ConfigModuleOptions } from './interface';

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  ASYNC_OPTIONS_TYPE,
  OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<ConfigModuleOptions>().build();
