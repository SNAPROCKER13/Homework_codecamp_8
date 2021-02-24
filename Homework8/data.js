const sales = [
  {
    id: 1,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '01-01-2021',
    customer: 'Sun',
    discount: 0.2,
    type: 'Cash'
  },
  {
    id: 2,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '01-01-2021',
    customer: 'Tle',
    type: 'Credit'
  },
  {
    id: 3,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 36900
    },
    saleDate: '01-01-2021',
    customer: 'Beer',
    type: 'Cash'
  },
  {
    id: 4,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '01-01-2021',
    customer: 'Jit',
    discount: 0.2,
    type: 'Credit'
  },
  {
    id: 5,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 36900
    },
    saleDate: '01-01-2021',
    customer: 'Palm',
    type: 'Cash'
  },
  {
    id: 6,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '01-01-2021',
    customer: 'Top',
    type: 'Credit'
  },
  {
    id: 7,
    product: {
      id: 4,
      name: 'Oppo',
      model: 'A15',
      unitPrice: 4299
    },
    saleDate: '02-01-2021',
    customer: 'Sun',
    type: 'Credit'
  },
  {
    id: 8,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '02-01-2021',
    customer: 'Snap',
    discount: 0.1,
    type: 'Credit'
  },
  {
    id: 9,
    product: {
      id: 5,
      name: 'iPhone',
      model: '11 Pro',
      unitPrice: 36900
    },
    saleDate: '02-01-2021',
    customer: 'Ham',
    discount: 0.25,
    type: 'Credit'
  },
  {
    id: 10,
    product: {
      id: 6,
      name: 'Samsung',
      model: 'A31',
      unitPrice: 7999
    },
    saleDate: '02-01-2021',
    customer: 'Ham',
    discount: 0.25,
    type: 'Credit'
  },
  {
    id: 11,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '02-01-2021',
    customer: 'Tle',
    discount: 0.3,
    type: 'Airpay'
  },
  {
    id: 12,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '02-01-2021',
    customer: 'Micky',
    type: 'Credit'
  },
  {
    id: 13,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '02-01-2021',
    customer: 'Boss',
    type: 'Cash'
  },
  {
    id: 14,
    product: {
      id: 7,
      name: 'Oppo',
      model: 'Reno5',
      unitPrice: 19990
    },
    saleDate: '02-01-2021',
    customer: 'Sila',
    type: 'Airpay'
  },
  {
    id: 15,
    product: {
      id: 8,
      name: 'Xiaomi',
      model: 'Redmi 9C',
      unitPrice: 3399
    },
    saleDate: '02-01-2021',
    customer: 'Top',
    type: 'Cash'
  },
  {
    id: 16,
    product: {
      id: 9,
      name: 'Samsung',
      model: 'A42',
      unitPrice: 11990
    },
    saleDate: '03-01-2021',
    customer: 'Cin',
    type: 'Cash'
  },
  {
    id: 17,
    product: {
      id: 6,
      name: 'Samsung',
      model: 'A31',
      unitPrice: 7999
    },
    saleDate: '03-01-2021',
    customer: 'Cin',
    type: 'Cash'
  },
  {
    id: 18,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 36900
    },
    saleDate: '03-01-2021',
    customer: 'Sine',
    discount: 0.3,
    type: 'Airpay'
  },
  {
    id: 19,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '03-01-2021',
    customer: 'Note',
    type: 'Credit'
  },
  {
    id: 20,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '03-01-2021',
    customer: 'Micky',
    type: 'Credit'
  },
  {
    id: 21,
    product: {
      id: 10,
      name: 'Vivo',
      model: 'V20 Pro',
      unitPrice: 14999
    },
    saleDate: '04-01-2021',
    customer: 'Bank',
    type: 'Cash'
  },
  {
    id: 22,
    product: {
      id: 10,
      name: 'Vivo',
      model: 'V20 Pro',
      unitPrice: 14999
    },
    saleDate: '04-01-2021',
    customer: 'Bank',
    type: 'Cash'
  },
  {
    id: 23,
    product: {
      id: 7,
      name: 'Oppo',
      model: 'Reno5',
      unitPrice: 19990
    },
    saleDate: '04-01-2021',
    customer: 'Leo',
    type: 'Cash'
  },
  {
    id: 24,
    product: {
      id: 9,
      name: 'Samsung',
      model: 'A42',
      unitPrice: 11990
    },
    saleDate: '04-01-2021',
    customer: 'Game',
    type: 'Cash'
  },
  {
    id: 25,
    product: {
      id: 6,
      name: 'Samsung',
      model: 'A31',
      unitPrice: 7999
    },
    saleDate: '04-01-2021',
    customer: 'U',
    discount: 0.3,
    type: 'Airpay'
  },
  {
    id: 26,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '05-01-2021',
    customer: 'Boy',
    type: 'Credit'
  },
  {
    id: 27,
    product: {
      id: 11,
      name: 'Vivo',
      model: 'X50 Pro',
      unitPrice: 19999
    },
    saleDate: '05-01-2021',
    customer: 'Boom',
    type: 'True Wallet'
  },
  {
    id: 28,
    product: {
      id: 12,
      name: 'Vivo',
      model: 'V20',
      unitPrice: 10999
    },
    saleDate: '05-01-2021',
    customer: 'Boom',
    type: 'True Wallet'
  },
  {
    id: 29,
    product: {
      id: 9,
      name: 'Samsung',
      model: 'A42',
      unitPrice: 11990
    },
    saleDate: '05-01-2021',
    customer: 'Am',
    type: 'Cash'
  },
  {
    id: 30,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '06-01-2021',
    customer: 'Um',
    type: 'True Wallet'
  },
  {
    id: 31,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '06-01-2021',
    customer: 'Win',
    discount: 0.25,
    type: 'Airpay'
  },
  {
    id: 32,
    product: {
      id: 7,
      name: 'Oppo',
      model: 'Reno5',
      unitPrice: 19990
    },
    saleDate: '06-01-2021',
    customer: 'Cin',
    type: 'Cash'
  },
  {
    id: 33,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '07-01-2021',
    customer: 'Palm',
    discount: 0.1,
    type: 'Credit'
  },
  {
    id: 34,
    product: {
      id: 5,
      name: 'iPhone',
      model: '11 Pro',
      unitPrice: 36900
    },
    saleDate: '07-01-2021',
    customer: 'Dom',
    discount: 0.15,
    type: 'Credit'
  },
  {
    id: 35,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '07-01-2021',
    customer: 'Sern',
    type: 'True Wallet'
  },
  {
    id: 36,
    product: {
      id: 13,
      name: 'iPhone',
      model: 'SE2000',
      unitPrice: 14900
    },
    saleDate: '07-01-2021',
    customer: 'Beer',
    type: 'Cash'
  },
  {
    id: 37,
    product: {
      id: 14,
      name: 'iPhone',
      model: '12 Mini',
      unitPrice: 25900
    },
    saleDate: '07-01-2021',
    customer: 'Game',
    discount: 0.2,
    type: 'Credit'
  },
  {
    id: 38,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '07-01-2021',
    customer: 'Sun',
    discount: 0.25,
    type: 'Airpay'
  },
  {
    id: 39,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '07-01-2021',
    customer: 'Tom',
    type: 'Cash'
  },
  {
    id: 40,
    product: {
      id: 14,
      name: 'iPhone',
      model: '12 Mini',
      unitPrice: 25900
    },
    saleDate: '08-01-2021',
    customer: 'Ham',
    type: 'Cash'
  },
  {
    id: 41,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '08-01-2021',
    customer: 'Dom',
    type: 'Credit'
  },
  {
    id: 42,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '08-01-2021',
    customer: 'Cin',
    type: 'True Wallet'
  },
  {
    id: 43,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '08-01-2021',
    customer: 'Tle',
    type: 'Cash'
  },
  {
    id: 44,
    product: {
      id: 7,
      name: 'Oppo',
      model: 'Reno5',
      unitPrice: 19990
    },
    saleDate: '09-01-2021',
    customer: 'U',
    type: 'Cash'
  },
  {
    id: 45,
    product: {
      id: 11,
      name: 'Vivo',
      model: 'X50 Pro',
      unitPrice: 19999
    },
    saleDate: '09-01-2021',
    customer: 'Am',
    discount: 0.35,
    type: 'Airpay'
  },
  {
    id: 46,
    product: {
      id: 10,
      name: 'Vivo',
      model: 'V20 Pro',
      unitPrice: 14999
    },
    saleDate: '10-01-2021',
    customer: 'Sern',
    type: 'Cash'
  },
  {
    id: 47,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '10-01-2021',
    customer: 'Game',
    discount: 0.3,
    type: 'Credit'
  },
  {
    id: 48,
    product: {
      id: 9,
      name: 'Samsung',
      model: 'A42',
      unitPrice: 11990
    },
    saleDate: '10-01-2021',
    customer: 'Jit',
    type: 'Cash'
  },
  {
    id: 49,
    product: {
      id: 14,
      name: 'iPhone',
      model: '12 Mini',
      unitPrice: 25900
    },
    saleDate: '10-01-2021',
    customer: 'Snap',
    type: 'True Wallet'
  },
  {
    id: 50,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '10-01-2021',
    customer: 'Micky',
    type: 'Cash'
  },
  {
    id: 51,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '11-01-2021',
    customer: 'Boss',
    discount: 0.2,
    type: 'Credit'
  },
  {
    id: 52,
    product: {
      id: 8,
      name: 'Xiaomi',
      model: 'Redmi 9C',
      unitPrice: 3399
    },
    saleDate: '11-01-2021',
    customer: 'Leo',
    discount: 0.05,
    type: 'Credit'
  },
  {
    id: 53,
    product: {
      id: 10,
      name: 'Vivo',
      model: 'V20 Pro',
      unitPrice: 14999
    },
    saleDate: '11-01-2021',
    customer: 'Sine',
    discount: 0.15,
    type: 'True Wallet'
  },
  {
    id: 54,
    product: {
      id: 14,
      name: 'iPhone',
      model: '12 Mini',
      unitPrice: 25900
    },
    saleDate: '07-01-2021',
    customer: 'Um',
    discount: 0.1,
    type: 'Cash'
  },
]
//  ================================================================================

// 1. จำนวน transaction ทั้งหมด

console.log(` จำนวน tranction ทั้งหมด = ${sales.length}`);

//  ================================================================================
// 2. จำนวนลูกค้าที่แตกต่างกัน มีใครบ้าง แต่ละคนซื้อไปยอดรวมกันเท่าไหร่ กี่เครื่อง

let persons = sales.reduce(function (acc, item) {
  let names = item.customer
  let ids = item.id
  if (!acc[ids]) {
    acc[ids] = names
  }

  return acc

}, []);

let difPersons = persons.reduce(function (acc, names) {

  if (!acc.includes(names)) {
    acc.push(names);
  }

  return acc;

}, [])

let totalPrices = sales.reduce((acc, item) => {
  let names = item.customer
  let prices = item.product.unitPrice;
  if (!acc[names]) {
    acc[names] = 0 + prices;
  }

  return acc

}, [])


let totalPrices1 = sales.reduce(function (acc, item) {
  if (!acc[item.id]) {
    acc[item.customer] = item.product.unitPrice;
  }

  return acc;

}, [])

let keyNames = Object.keys(totalPrices)
let ValuePrices = Object.values(totalPrices)
let ValuePrices1 = Object.values(totalPrices1)

let superPrices = [];
for (let i = 0; i <= ValuePrices.length - 1; i++) {
  superPrices[i] = ValuePrices[i] + ValuePrices1[i];
}

let numberProduct = persons.reduce(function (acc, names) {

  if (names in acc) {
    acc[names] = acc[names] + 1
  }
  else {
    acc[names] = 1
  }
  return acc

}, [])

let customerNames = difPersons.map(function (item) {

  return numberProduct[item]

})

let fullData = [];
for (let i = 0; i <= ValuePrices.length - 1; i++) {
  fullData[i] = `ลูกค้า ${difPersons[i]}: ยอดรวม ${superPrices[i]}: จำนวนเครื่อง ${customerNames[i]}`;
}

console.log(fullData)

//  ================================================================================

// 3. ยอดขายทั้งหมด (หลังหัก discount)

let totalSales1 = sales.filter((item) => item.discount != undefined);

let totalMoney1 = [];
let totalDiscount = [];

let disCount = totalSales1.reduce(function (acc, item) {
  let prices = item.product.unitPrice;
  let names = item.customer;
  if (!acc[prices]) {
    acc.push(prices)
  }
  if (!acc[names]) {
    acc.push(item.discount)
  }
  return acc;

}, [])

let Prices1 = [];
let j = 0
for (let i = 0; i <= disCount.length - 1; i++) {

  if (i % 2 === 0) {
    Prices1[j] = disCount[i]
    j++;
  }
}
let disCount1 = [];
j = 0
for (let i = 0; i <= disCount.length - 1; i++) {

  if (i % 2 !== 0) {
    disCount1[j] = disCount[i];
    j++;
  }
}

for (let i = 0; i <= disCount1.length - 1; i++) {
  Prices1[i] = Prices1[i] * (1 - disCount1[i]);
}

let totalSales2 = sales.filter((item) => item.discount == undefined);

let notDisCount = totalSales2.reduce(function (acc, item) {
  let prices = item.product.unitPrice;

  if (!acc[prices]) {
    acc.push(prices);
  }
  return acc;

}, [])

let totalPricesDiscount = [];
totalPricesDiscount = [...Prices1, ...notDisCount];

let sumPricesDiscount = 0;

for (let i = 0; i <= totalPricesDiscount.length - 1; i++) {

  sumPricesDiscount += totalPricesDiscount[i];

}
console.log(`ยอดขายทั้งหมด (หลังหัก Discount) : ${sumPricesDiscount}`);

//  ================================================================================
// 4. สินค้าที่ถูกขายมี่กี่ยี่ห้อ แต่ละยี่ห้อขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่

let brandProduct = sales.reduce(function (acc, item) {
  let brands = item.product.name;
  if (!acc[brands]) {
    acc.push(brands)
  }
  return acc;

}, [])

let brandProduct1 = sales.reduce(function (acc, item) {
  let brands = item.product.name;

  if (brands in acc) {
    acc[brands] = acc[brands] + 1;
  }
  else {
    acc[brands] = 1;
  }

  return acc;

}, [])

let totalBrands = Object.values(brandProduct1);

finalTotalBrands = 0;

for (let i = 0; i <= totalBrands.length - 1; i++) {
  finalTotalBrands += totalBrands[i];
}

let totalBrands1 = Object.keys(brandProduct1);



let fullData2 = {
  สินค้าที่ถูกขายมี่: totalBrands1.length,
  แต่ละยี่ห้อขายไป: brandProduct1,
  ยอดรวม: finalTotalBrands
}



console.log(fullData2)

//  ================================================================================
// 5. สินค้าที่ถูกขายมีกี่รุ่นในแต่ละยี่ห้อ แต่ละรุ่นขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่

let brandModel = sales.filter(function (item) {

  if (item.product.name === "iPhone") {
    return item.product.name
  }

})

let brandModel1 = sales.filter(function (item) {

  if (item.product.name === "Oppo") {
    return item.product.name
  }

})

let brandModel2 = sales.filter(function (item) {

  if (item.product.name === "Xiaomi") {
    return item.product.name
  }

})

let brandModel3 = sales.filter(function (item) {

  if (item.product.name === "Vivo") {
    return item.product.name
  }

})

let brandModel4 = sales.filter(function (item) {

  if (item.product.name === "Samsung") {
    return item.product.name
  }

})

//  ======================================================================

let iphoneModel = brandModel.reduce(function (acc, item) {
  let models = item.product.model;

  if (models in acc) {
    acc[models] = acc[models] + 1;
  }
  else {
    acc[models] = 1;
  }

  return acc;

}, [])



let OppoModel = brandModel1.reduce(function (acc, item) {
  let models = item.product.model;

  if (models in acc) {
    acc[models] = acc[models] + 1;
  }
  else {
    acc[models] = 1;
  }

  return acc;

}, [])

let XModel = brandModel2.reduce(function (acc, item) {
  let models = item.product.model;

  if (models in acc) {
    acc[models] = acc[models] + 1;
  }
  else {
    acc[models] = 1;
  }

  return acc;

}, [])

let VivoModel = brandModel3.reduce(function (acc, item) {
  let models = item.product.model;

  if (models in acc) {
    acc[models] = acc[models] + 1;
  }
  else {
    acc[models] = 1;
  }

  return acc;

}, [])

let SamsungModel = brandModel4.reduce(function (acc, item) {
  let models = item.product.model;

  if (models in acc) {
    acc[models] = acc[models] + 1;
  }
  else {
    acc[models] = 1;
  }

  return acc;

}, [])


// ============================================================================== 

let arrMVivo = Object.keys(VivoModel)
let arrMsamSung = Object.keys(SamsungModel)
let arrMXiaomi = Object.keys(XModel)
let arrMiPhone = Object.keys(iphoneModel)
let arrMOppo = Object.keys(OppoModel)

let totalModelVivo = arrMVivo.length
let totalModelSamSung = arrMsamSung.length
let totalModelXiaoami = arrMXiaomi.length
let totalModelIphone = arrMiPhone.length
let totalModelOppo = arrMOppo.length

let arrProduct = `ยี่ห้อ Vivo มี ${totalModelVivo} รุ่น , ยี่ห้อ Samsung มี ${totalModelSamSung} รุ่น, ยี่ห้อ Xiaoami มี ${totalModelXiaoami} รุ่น, ยี่ห้อ iPhone มี ${totalModelIphone} รุ่น, ยี่ห้อ Oppo มี ${totalModelVivo} รุ่น`;

// ================================================================================

let arrMVivo1 = Object.values(VivoModel)
let arrMsamSung1 = Object.values(SamsungModel)
let arrMXiaomi1 = Object.values(XModel)
let arrMiPhone1 = Object.values(iphoneModel)
let arrMOppo1 = Object.values(OppoModel)

let totalModelOppo1 = 0;
for (let i = 0; i <= arrMOppo1.length - 1; i++) {
  totalModelOppo1 += arrMOppo1[i]
}
let totalModelSamSung1 = 0
for (let i = 0; i <= arrMsamSung1.length - 1; i++) {
  totalModelSamSung1 += arrMsamSung1[i]
}
let totalModelXiaoami1 = 0
for (let i = 0; i <= arrMXiaomi1.length - 1; i++) {
  totalModelXiaoami1 += arrMXiaomi1[i]
}
let totalModelIphone1 = 0
for (let i = 0; i <= arrMiPhone1.length - 1; i++) {
  totalModelIphone1 += arrMiPhone1[i]
}
let totalModelVivo1 = 0
for (let i = 0; i <= arrMVivo1.length - 1; i++) {
  totalModelVivo1 += arrMVivo1[i]
}

let arrSale = `ยี่ห้อ Vivo ขาย ${totalModelVivo1} เครื่อง , ยี่ห้อ Samsung ขาย ${totalModelSamSung1} เครื่อง, ยี่ห้อ Xiaoami ขาย ${totalModelXiaoami1} เครื่อง, ยี่ห้อ iPhone ขาย ${totalModelIphone1} เครื่อง, ยี่ห้อ Oppo ขาย ${totalModelVivo1} เครื่อง`;

//  =========================================================================

let pricesModel = brandModel.reduce(function (acc, item) {
  let prices = item.product.unitPrice;
  let disCount = item.discount;

  if (!acc[disCount]) {
    acc.push(prices)
  }

  return acc;

}, [])

let discountPricesModel = brandModel.reduce(function (acc, item) {
  let disCount = item.discount;

  if (!acc[disCount]) {
    acc.push(disCount)
  }

  return acc;

}, [])

let PricesDiscount = []
for (let i = 0; i <= pricesModel.length - 1; i++) {
  if (discountPricesModel[i] !== undefined) {
    PricesDiscount[i] = pricesModel[i] * (1 - discountPricesModel[i]);
  }
  else if (discountPricesModel[i] === undefined) {
    PricesDiscount[i] = pricesModel[i];
  }
}

const priceLists = [];
count = 0
brandModel.forEach((item) => {
  let models = item.product.model;
  if (priceLists[models]) {
    priceLists[models] += PricesDiscount[count];
  }
  else {
    priceLists[models] = PricesDiscount[count];
  }
  count++;

})

//  =========================================================================

let pricesModel_1 = brandModel1.reduce(function (acc, item) {
  let prices = item.product.unitPrice;
  acc.push(prices)
  return acc;
}, [])

let discountPricesModel_1 = brandModel1.reduce(function (acc, item) {
  let disCount = item.discount;

  if (!acc[disCount]) {
    acc.push(disCount)
  }

  return acc;

}, [])

let PricesDiscount_1 = []
for (let i = 0; i <= pricesModel_1.length - 1; i++) {
  if (discountPricesModel_1[i] !== undefined) {
    PricesDiscount_1[i] = pricesModel_1[i] * (1 - discountPricesModel_1[i]);
  }
  else if (discountPricesModel_1[i] === undefined) {
    PricesDiscount_1[i] = pricesModel_1[i];
  }
}

const priceLists_1 = [];
count = 0
brandModel1.forEach((item) => {
  let models = item.product.model;
  if (priceLists_1[models]) {
    priceLists_1[models] += PricesDiscount_1[count];
  }
  else {
    priceLists_1[models] = PricesDiscount_1[count];
  }
  count++;

})

//  =========================================================================

let pricesModel_2 = brandModel2.reduce(function (acc, item) {
  let prices = item.product.unitPrice;
  acc.push(prices)
  return acc;
}, [])

let discountPricesModel_2 = brandModel2.reduce(function (acc, item) {
  let disCount = item.discount;

  if (!acc[disCount]) {
    acc.push(disCount)
  }

  return acc;

}, [])

let PricesDiscount_2 = []
for (let i = 0; i <= pricesModel_2.length - 1; i++) {
  if (discountPricesModel_2[i] !== undefined) {
    PricesDiscount_2[i] = pricesModel_2[i] * (1 - discountPricesModel_2[i]);
  }
  else if (discountPricesModel_2[i] === undefined) {
    PricesDiscount_2[i] = pricesModel_2[i];
  }
}

const priceLists_2 = [];
count = 0
brandModel2.forEach((item) => {
  let models = item.product.model;
  if (priceLists_2[models]) {
    priceLists_2[models] += PricesDiscount_2[count];
  }
  else {
    priceLists_2[models] = PricesDiscount_2[count];
  }
  count++;

})

//  =========================================================================

let pricesModel_3 = brandModel3.reduce(function (acc, item) {
  let prices = item.product.unitPrice;
  acc.push(prices)
  return acc;
}, [])

let discountPricesModel_3 = brandModel3.reduce(function (acc, item) {
  let disCount = item.discount;

  if (!acc[disCount]) {
    acc.push(disCount)
  }

  return acc;

}, [])

let PricesDiscount_3 = []
for (let i = 0; i <= pricesModel_3.length - 1; i++) {
  if (discountPricesModel_3[i] !== undefined) {
    PricesDiscount_3[i] = pricesModel_3[i] * (1 - discountPricesModel_3[i]);
  }
  else if (discountPricesModel_2[i] === undefined) {
    PricesDiscount_3[i] = pricesModel_3[i];
  }
}

const priceLists_3 = [];
count = 0
brandModel3.forEach((item) => {
  let models = item.product.model;
  if (priceLists_3[models]) {
    priceLists_3[models] += PricesDiscount_3[count];
  }
  else {
    priceLists_3[models] = PricesDiscount_3[count];
  }
  count++;

})

//  =========================================================================
let pricesModel_4 = brandModel4.reduce(function (acc, item) {
  let prices = item.product.unitPrice;
  acc.push(prices)
  return acc;
}, [])

let discountPricesModel_4 = brandModel4.reduce(function (acc, item) {
  let disCount = item.discount;

  if (!acc[disCount]) {
    acc.push(disCount)
  }

  return acc;

}, [])

let PricesDiscount_4 = []
for (let i = 0; i <= pricesModel_4.length - 1; i++) {
  if (discountPricesModel_4[i] !== undefined) {
    PricesDiscount_4[i] = pricesModel_4[i] * (1 - discountPricesModel_4[i]);
  }
  else if (discountPricesModel_2[i] === undefined) {
    PricesDiscount_4[i] = pricesModel_4[i];
  }
}

const priceLists_4 = [];
count = 0
brandModel4.forEach((item) => {
  let models = item.product.model;
  if (priceLists_4[models]) {
    priceLists_4[models] += PricesDiscount_4[count];
  }
  else {
    priceLists_4[models] = PricesDiscount_4[count];
  }
  count++;

})



let fullData3 = {
  arrProduct,
  arrSale,
  BrandIphone: { priceLists },
  BrandOppo: { priceLists_1 },
  BrandXiaomi: { priceLists_2 },
  BrandVivo: { priceLists_3 },
  BrandSamSung: { priceLists_4 }
}

console.log(fullData3)

//  =======================================================================
// 6. หายอดรวมของการจ่ายแต่ละประเภท (Cash, Credit, ...)

let Payments = sales.filter(function (item) {

  if (item.type === "Airpay") {
    return item.type
  }
})


let typesPaymentPrices = Payments.reduce(function (acc, item) {
  let prices = item.product.unitPrice;
  acc.push(prices)
  return acc;
}, [])

let typePaymentDiscount = Payments.reduce(function (acc, item) {
  let disCount = item.discount;

  if (!acc[disCount]) {
    acc.push(disCount)
  }

  return acc;

}, [])

let totalPaymentDiscount = []
for (let i = 0; i <= typesPaymentPrices.length - 1; i++) {
  if (typePaymentDiscount[i] !== undefined) {
    totalPaymentDiscount[i] = typesPaymentPrices[i] * (1 - typePaymentDiscount[i]);
  }
  else if (typePaymentDiscount[i] === undefined) {
    totalPaymentDiscount[i] = typesPaymentPrices[i];
  }
}

count = 0;
typePayment = {};
Payments.forEach(function (item) {
  let types = item.type;
  if (typePayment[types]) {
    typePayment[types] += totalPaymentDiscount[count]
  }
  else {
    typePayment[types] = totalPaymentDiscount[count]
  }
  count++;
})

//  ========================================================================
let Payments1 = sales.filter(function (item) {

  if (item.type === "Credit") {
    return item.type
  }
})

let typesPaymentPrices_1 = Payments1.reduce(function (acc, item) {
  let prices = item.product.unitPrice;
  acc.push(prices)
  return acc;
}, [])

let typePaymentDiscount_1 = Payments1.reduce(function (acc, item) {
  let disCount = item.discount;

  if (!acc[disCount]) {
    acc.push(disCount)
  }

  return acc;

}, [])

let totalPaymentDiscount_1 = []
for (let i = 0; i <= typesPaymentPrices_1.length - 1; i++) {
  if (typePaymentDiscount_1[i] !== undefined) {
    totalPaymentDiscount_1[i] = typesPaymentPrices_1[i] * (1 - typePaymentDiscount_1[i]);
  }
  else if (typePaymentDiscount_1[i] === undefined) {
    totalPaymentDiscount_1[i] = typesPaymentPrices_1[i];
  }
}

count = 0;
typePayment1 = {};
Payments1.forEach(function (item) {
  let types = item.type;
  if (typePayment1[types]) {
    typePayment1[types] += totalPaymentDiscount_1[count]
  }
  else {
    typePayment1[types] = totalPaymentDiscount_1[count]
  }
  count++
})

//  =======================================================================

let Payments2 = sales.filter(function (item) {

  if (item.type === "Cash") {
    return item.type
  }
})


let typesPaymentPrices_2 = Payments2.reduce(function (acc, item) {
  let prices = item.product.unitPrice;
  acc.push(prices)
  return acc;
}, [])

let typePaymentDiscount_2 = Payments2.reduce(function (acc, item) {
  let disCount = item.discount;

  if (!acc[disCount]) {
    acc.push(disCount)
  }

  return acc;

}, [])

let totalPaymentDiscount_2 = []
for (let i = 0; i <= typesPaymentPrices_2.length - 1; i++) {
  if (typePaymentDiscount_2[i] !== undefined) {
    totalPaymentDiscount_2[i] = typesPaymentPrices_2[i] * (1 - typePaymentDiscount_2[i]);
  }
  else if (typePaymentDiscount_2[i] === undefined) {
    totalPaymentDiscount_2[i] = typesPaymentPrices_2[i];
  }
}

count = 0;
typePayment2 = {};
Payments2.forEach(function (item) {
  let types = item.type;
  if (typePayment2[types]) {
    typePayment2[types] += totalPaymentDiscount_2[count]
  }
  else {
    typePayment2[types] = totalPaymentDiscount_2[count]
  }
  count++;
})

//  ========================================================================
let Payments3 = sales.filter(function (item) {

  if (item.type === "True Wallet") {
    return item.type
  }
})

let typesPaymentPrices_3 = Payments3.reduce(function (acc, item) {
  let prices = item.product.unitPrice;
  acc.push(prices)
  return acc;
}, [])

let typePaymentDiscount_3 = Payments3.reduce(function (acc, item) {
  let disCount = item.discount;

  if (!acc[disCount]) {
    acc.push(disCount)
  }

  return acc;

}, [])

let totalPaymentDiscount_3 = []
for (let i = 0; i <= typesPaymentPrices_3.length - 1; i++) {
  if (typePaymentDiscount_3[i] !== undefined) {
    totalPaymentDiscount_3[i] = typesPaymentPrices_3[i] * (1 - typePaymentDiscount_3[i]);
  }
  else if (typePaymentDiscount_3[i] === undefined) {
    totalPaymentDiscount_3[i] = typesPaymentPrices_3[i];
  }
}

count = 0;
typePayment3 = {};
Payments3.forEach(function (item) {
  let types = item.type;
  if (typePayment3[types]) {
    typePayment3[types] += totalPaymentDiscount_3[count]
  }
  else {
    typePayment3[types] = totalPaymentDiscount_3[count]
  }
  count++
})

fullData4 = {
  TypeAirPlay: typePayment,
  TypeCredit: typePayment1,
  TypeCash: typePayment2,
  'TypeTrue Wallet': typePayment3,
}

console.log(fullData4)

//  =======================================================================
// 7. หายอดรวมในแต่ละวัน

let Dates = sales.reduce(function (acc, item) {
  let date = item.saleDate
  if (!acc[date]) {
    acc.push(date)
  }

  return acc;
}, [])

let pricesDate = sales.reduce(function (acc, item) {
  let prices = item.product.unitPrice
  if (!acc[prices]) {
    acc.push(prices)
  }

  return acc;
}, [])

let discountDate = sales.reduce(function (acc, item) {
  let discounts = item.discount
  if (!acc[discounts]) {
    acc.push(discounts)
  }

  return acc;
}, [])

let priceDiscountDate = []
for (let i = 0; i <= pricesDate.length - 1; i++) {
  if (discountDate[i] !== undefined) {
    priceDiscountDate[i] = pricesDate[i] * (1 - discountDate[i]);
  }
  else if (discountDate[i] === undefined) {
    priceDiscountDate[i] = pricesDate[i];
  }
}

count = 0;
let dateSale = {};
sales.forEach(function (item) {
  let date = item.saleDate
  if (dateSale[date]) {
    dateSale[date] += priceDiscountDate[count]
  }
  else {
    dateSale[date] = priceDiscountDate[count];
  }
  count++
})

console.log(dateSale);

//  =======================================================================
// 8. เรียงยอดขายของแต่ละรุ่นจากมากไปน้อย

let totalBrandModel = [];
totalBrandModel = { ...priceLists, ...priceLists_1, ...priceLists_2, ...priceLists_3, ...priceLists_4 }


let valuePricesModel = Object.values(totalBrandModel);
let keyNamesModel = Object.keys(totalBrandModel);

count = 0;
let keyPrice = valuePricesModel.reduce(function (acc, item) {
  if (!acc[item]) {
    acc[item] = keyNamesModel[count];
    count++;
  }
  return acc;

}, [])

let sortPrices = valuePricesModel.sort(function (a, b) {
  return b - a;
})

sortModelName = sortPrices.map(function (item) {
  return keyPrice[item]
});


count = 0;
let fullData5 = sortModelName.reduce(function (acc, item, index) {
  if (!acc[item]) {
    acc[index] = { [item]: sortPrices[count] };
    count++;
  }

  return acc;

}, [])

console.log(fullData5);



//  ==================================================================
// 9. เรียงลูกค้าที่ซื้อมากที่สุดจากมากไปน้อย


let valueNumberProduct = Object.values(numberProduct);
let keyNamesCustomer = Object.keys(numberProduct);

count = 0;
let sortCustomer = valueNumberProduct.reduce((acc, item, index) => {
  if (item in acc) {
    acc[item] = acc[item] + ',' + keyNamesCustomer[count]
  }
  else {
    acc[item] = keyNamesCustomer[count]
  }
  count++
  return acc;

}, [])


let sortIds = [];

for (let i = sortCustomer.length - 1; i >= 1; i--) {
  sortIds[i] = i;
}

sortIds.sort(function (a, b) {
  return b - a
})

fullData6 = sortIds.map(function (item) {
  return sortCustomer[item];

})
count = fullData6.length - 1
fullData6.forEach((item,index) => {

  fullData6[index] = `จำนวนการซื้อ ${[count]}:  ${[item]}`;
  
  count--;
});

console.log(fullData6);