const currentVersion = '1.0.3';
fetch('https://raw.githubusercontent.com/asakew/full-kew/master/src/yandex-manifest.json')
  .then(res => res.json())
  .then(manifest => {
    if (currentVersion !== manifest.yandex.app_version) {
      return yandex.app.forceUpdate();
    }
  })
