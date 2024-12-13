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
      this.incrimentQuality(item,50,11);
      this.incrimentQuality(item,50,6);
    }
  }

  private decrementQualityByDiiferentName(item: Item , itemName: string){
    if (item.name != itemName) {
      item.quality --;
    }
  }
  private updateNormalItem(item: Item) {
    if (item.quality > 0) {
      item.quality--;
    }
  }


  private updateItemQuality(item: Item) {
    switch (item.name) {
      case 'Aged Brie':
        this.updateQualityAgedBrie(item);
        break;
      case 'Backstage passes to a TAFKAL80ETC concert':
        this.updateBackstagePass(item);
        break;
      case 'Sulfuras, Hand of Ragnaros':
        //  rien a faire 
        return;
      default:
        this.updateNormalItem(item);
        break;
    }
  }


  private incrimentQuality (item: Item , maxQuality : number, maxSellin : number){
    if (item.sellIn < maxSellin) {
      if (item.quality < maxQuality) {
        item.quality = item.quality + 1
      }
    }
  }

  updateQuality() {
    this.items.map( (item)  =>  {
    this.updateItemQuality(item);
    this.decrementQualityByDiiferentName(item,'Sulfuras, Hand of Ragnaros' )
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              this.decrementQualityByDiiferentName(item,'Sulfuras, Hand of Ragnaros' );
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }
        }
      }
    });

    return this.items;
  }
}
