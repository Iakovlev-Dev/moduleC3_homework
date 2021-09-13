class ElectricalAppliance {
    constructor(name, power){
      this.name = name;
      this.power = power;
      this.isPlugged = false;
    }
    //включено в розетку
    plugIn() {
      console.log(this.name + " is plugged!");
      this.isPlugged = true;
    }
    
    //выключено из розетки
    unplug() {
      console.log(this.name + " is unplugged!");
      this.isPlugged = false;
    }
  }
  
  // Прибор 1
  class Lamp extends ElectricalAppliance {
    constructor (name, brand, power, bulbType) {
      super(name, power);
      this.brand = brand;
      this.bulbType = bulbType;
      this.isPlugged = true;
    }
  }
  
  // Прибор 2
  class Computer extends ElectricalAppliance {
    constructor(name, brand, power, type, functionality) {
      super(name, power); 
      this.brand = brand;
      this.type = type;
      this.functionality = functionality;
      this.isPlugged = false;
    }
  }
  
  //  лампа 1
  const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");
  
  // компьютера 1
  const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work");
  
  // отключить лампу из розетки
  tableLamp.unplug();
  
  // включить homePC в розетку
  homePC.plugIn();
  
  // результат
  console.log(homePC)
  console.log(tableLamp)