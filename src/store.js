import { reactive } from 'vue';

export const store = reactive ({
    events:[
        {
            firstDate: '2022/06/22 @ 01:30',
            lastDate: '2024/08/23 @ 7:00',
            name: "Toronto Cycling Event 2023",
            city: 'Toronto',
            type: 'Bicycle Race',
            img: 'event1.jpg'

        },
        {
            firstDate: '2022/06/22 @ 01:30',
            lastDate: '2024/08/23 @ 7:00',
            name: "Istanbul Cycling Event 2023",
            city: 'Istanbul',
            type: 'Bike Sport',
            img: 'event2.jpg'
        },
        {
            firstDate: '2022/06/30 @ 01:30',
            lastDate: '2024/11/08 @ 16:30',
            name: "Paris Cycling Event 2023",
            city: 'Paris',
            type: 'Cycling Tour',
            img: 'event3.jpg'

        },
        
        {
            firstDate: '2022/06/25 @ 03:00',
            lastDate: '2024/08/24 @ 5:30',
            name: "New Jersey Cycling Event 2023",
            city: 'New Jersey',
            type: 'Bicycle Race',
            img: 'event4.jpg'
        },
        {
            firstDate: '2022/06/30 @ 01:30',
            lastDate: '2024/11/08 @ 16:30',
            name: "London Cycling Event 2023",
            city: 'London ',
            type: 'Bike Sport',
            img: 'event5.jpg'
        },
        
        {
            firstDate: '2022/06/25 @ 03:00',
            lastDate: '2024/08/24 @ 5:30',
            name: "Kiev Cycling Event 2023",
            city: 'Kiev',
            type: 'Bicycle Race',
            img: 'event6.jpg'

        },
        {
            firstDate: '2022/06/30 @ 01:30',
            lastDate: '2024/11/08 @ 16:30',
            name: "Colorado Cycling Event 2023",
            city: 'Colorado',
            type: 'Bike Sport',
            img: 'event7.jpg'
        },
        
        {
            firstDate: '2022/06/25 @ 03:00',
            lastDate: '2024/08/24 @ 5:30',
            name: "Amsterdam Cycling Event 2023",
            city: 'Amsterdam',
            type: 'Bicycle Race',
            img: 'event8.jpg'
        },
        {
            firstDate: '2022/06/30 @ 01:30',
            lastDate: '2024/11/08 @ 16:30',
            name: "Toronto Cycling Event 2023",
            city: 'Toronto',
            type: 'Bike Sport',
            img: 'event9.jpg'
        },
        
        {
            firstDate: '2022/06/25 @ 03:00',
            lastDate: '2024/08/24 @ 5:30',
            name: "Paris Cycling Event 2023",
            city: 'Paris',
            type: 'Bicycle Race',
            img: 'event10.jpg'
        },
    ],
    flagEvents: false
})