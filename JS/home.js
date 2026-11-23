








 const offers = document.querySelector(".offers");

        let items = [...offers.children];

        let width = offers.offsetWidth;

        let current = 0;

        const stayTime = 5000;
        const moveTime = 1000;

        // وضع أول صورة في الشاشة
        items.forEach((item, index) => {
            item.style.transform = `translateX(${index === 0 ? 0 : width}px)`;
        });

        function nextOffer() {

            const currentItem = items[current];

            const next = (current + 1) % items.length;

            const nextItem = items[next];

            // تجهيز الصورة التالية خارج الشاشة من اليمين
            nextItem.style.transition = "none";
            nextItem.style.transform = `translateX(${width}px)`;

            // بدء الحركة
            requestAnimationFrame(() => {

                requestAnimationFrame(() => {

                    currentItem.style.transition = `transform ${moveTime}ms ease`;
                    nextItem.style.transition = `transform ${moveTime}ms ease`;

                    currentItem.style.transform = `translateX(-${width}px)`;
                    nextItem.style.transform = "translateX(0)";

                });

            });

            // الانتقال للصورة التالية بعد انتهاء الحركة
            setTimeout(() => {

                currentItem.style.transition = "none";

                currentItem.style.transform = `translateX(${width}px)`;

                current = next;

                // الانتظار 7 ثواني ثم الانتقال للصورة التالية
                setTimeout(nextOffer, stayTime);

            }, moveTime);
        }

        // أول صورة تنتظر 7 ثواني
        setTimeout(nextOffer, stayTime);

        // تحديث العرض عند تغيير حجم الشاشة
        window.addEventListener("resize", () => {

            width = offers.offsetWidth;

            items.forEach((item, index) => {

                if (index === current) {
                    item.style.transition = "none";
                    item.style.transform = "translateX(0)";
                } else {
                    item.style.transition = "none";
                    item.style.transform = `translateX(${width}px)`;
                }

            });

        });
