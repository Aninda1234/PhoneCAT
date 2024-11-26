export interface Phone {
    id: string;
    name: string;
    price: string;
    snippet: string;
    description: string;
    additionalFeatures: string;
    android: {
      os: string;
      ui: string;
    };
    availability: string[];
    battery: {
      standbyTime: string;
      talkTime: string;
      type: string;
    };
    camera: {
      features: string[];
      primary: string;
    };
    connectivity: {
      bluetooth: string;
      cell: string;
      gps: boolean;
      infrared: boolean;
      wifi: string;
    };
    display: {
      screenResolution: string;
      screenSize: string;
      touchScreen: boolean;
    };
    hardware: {
      accelerometer: boolean;
      audioJack: string;
      cpu: string;
      fmRadio: boolean;
      physicalKeyboard: boolean;
      usb: string;
    };
    images: string[];
    imageUrl: string;
    sizeAndWeight: {
      dimensions: string[];
      weight: string;
    };
    storage: {
      flash: string;
      ram: string;
    };
  }
  


// export interface Phone {
//     id: number;
//     name: string;
//     brand: string;
//     price: number;
//     description: string;
//     imageUrl: string;
//   }

  