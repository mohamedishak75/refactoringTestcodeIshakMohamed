export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

enum itemName {
  AGEDBRIE = "Aged Brie",
  BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert",
  SULFURAS = "Sulfuras, Hand of Ragnaros",
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  private updateQualityAgedBrie(item: Item) {
    if (item.quality < 50) {
      item.quality++;
    }
  }

  private updateBackstagePass(item: Item) {
    if (item.quality < 50) {
      item.quality++;
      this.incrimentQuality(item, 50, 11);
      this.incrimentQuality(item, 50, 6);
    }
  }

  private decrementQualityByDiiferentName(item: Item, itemName: string) {
    if (item.name != itemName) {
      item.sellIn--;
    }
  }
  private updateNormalItem(item: Item) {
    if (item.quality > 0) {
      item.quality--;
    }
  }

  private updateItemQuality(item: Item) {
    switch (item.name) {
      case itemName.AGEDBRIE:
        this.updateQualityAgedBrie(item);
        break;
      case itemName.BACKSTAGE:
        this.updateBackstagePass(item);
        break;
      case itemName.SULFURAS:
        //  rien a faire
        return;
      default:
        this.updateNormalItem(item);
        break;
    }
  }

  private updateQualityIfNegativeSellin(item: Item) {
    switch (item.name) {
      case itemName.AGEDBRIE:
        this.updateQualityAgedBrie(item);
        break;
      case itemName.BACKSTAGE:
        item.quality = 0;
        break;
      default:
        this.updateNormalItem(item);
        break;
    }
  }

  private incrimentQuality(item: Item, maxQuality: number, maxSellin: number) {
    if (item.sellIn < maxSellin) {
      if (item.quality < maxQuality) {
        item.quality++;
      }
    }
  }

  updateQuality() {
    this.items.forEach((item) => {
      this.updateItemQuality(item);
      this.decrementQualityByDiiferentName(item, itemName.SULFURAS);

      if (item.sellIn < 0) {
        this.updateQualityIfNegativeSellin(item);
      }
    });

    return this.items;
  }
}
