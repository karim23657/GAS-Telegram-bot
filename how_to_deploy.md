# آموزش اجرای ربات در google app script

##### گام ها 
[1:ساخت یک پروژه جدید](#1ساخت-یک-پروژه-جدید)  




## 1:ساخت یک پروژه جدید

طبق تصاویر یک پروژه ی جدید در [google app script](https://script.google.com)   ایجاد میکنیم

![001](https://user-images.githubusercontent.com/64953489/160360207-5873a850-f4f2-4f3a-b8de-31c5c7734fd2.png)


تغییر نام پروژه

![Shot 0201](https://user-images.githubusercontent.com/64953489/160360381-a2b16351-2fd2-44ca-889f-16d3da217d8e.png)

![Shot 0202](https://user-images.githubusercontent.com/64953489/160360527-08bd5322-7ad1-4641-afe3-bc0a9961c2bc.png)

![Shot 0203](https://user-images.githubusercontent.com/64953489/160360642-132112c0-4139-4245-b5ae-e9e7622e7754.png)

سپس توکن ربات را در خط اول قرار می دهیم.حال پروژه را ذخیره کرده(1) و روی New Deployment (2) می زنیم.
![Shot 0206](https://user-images.githubusercontent.com/64953489/160361681-e78516ed-dbb2-4f2f-857a-0ad3c7c72364.png)
![Shot 0208](https://user-images.githubusercontent.com/64953489/160362026-1537cde6-619d-4913-a09f-5d6311336146.png)
![Shot 0209](https://user-images.githubusercontent.com/64953489/160362451-3970fcbf-0456-4f14-8651-e76812724c43.png)


سپس روی دکمه ی Deploy می زنیم برای بار اول نیاز به دسترسی دادن به ربات داریم ولی برای بار های دیگر نیازی نیست.
![Shot 0213](https://user-images.githubusercontent.com/64953489/160363360-2baac150-c0a5-4937-b063-4ec7bcaef391.png)
![Shot 0214](https://user-images.githubusercontent.com/64953489/160363661-51e5247a-e8fe-4791-87f4-dfec0b53f999.png)
![Shot 0215](https://user-images.githubusercontent.com/64953489/160363794-67e3680a-bb9b-4683-ad56-7e054288dea8.png)
![Shot 0216](https://user-images.githubusercontent.com/64953489/160363975-35847609-e29c-4c26-8cf1-dab179471c59.png)
![Shot 0217](https://user-images.githubusercontent.com/64953489/160364217-985188f3-3c52-4a79-8faf-a4d63f0e5222.png)

لینک را کپی می کنیم و به کد باز میگردیم
![Shot 0218](https://user-images.githubusercontent.com/64953489/160364594-34e63a01-7532-4b92-9700-8dea5ed9deb6.png)

در خط 182 آدرس  سرور را جایگذاری میکنیم و روی دکمه ی ذخیره می زنیم
![Shot 0220](https://user-images.githubusercontent.com/64953489/160365337-45dd35fe-faed-4445-9a27-89a88b87c037.png)

در بین توابع ، تابع setWebhook را انتخاب کرده و روی اجرا کلیک می کنیم


![Shot 0223](https://user-images.githubusercontent.com/64953489/160366250-381b5477-1188-4041-8bbb-009dc676f153.png)

توجه کنید که با هر بار ویرایش کد باید آن را New deployment کنیم و وبهوک را ست کنیم
