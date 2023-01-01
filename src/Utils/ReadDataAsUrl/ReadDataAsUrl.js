export async function readFileAsDataURL(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (evt) => {
        if (reader.result) {
          resolve(reader.result);
        }
      }
    //   reader.addEventListener('load', (evt) => {
    //     if (reader.result) {
    //       resolve(reader.result);
    //     }
    //   });
      reader.readAsDataURL(file);
    });
  }