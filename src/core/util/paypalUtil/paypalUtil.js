export class PayPalUtil {
  static convertItemToPaypalObj(items) {
    const paypalItems = [];
    items.forEach((item) => {
      paypalItems.push({
        description: item.title,
        amount: {
          currency_code: "USD",
          value: item.price,
        },
      });
    });
    return paypalItems;
  }
}
