import { bootstrap } from './main';
declare const module: any;

void bootstrap().then((app) => {
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => void app.close());
  }
});
