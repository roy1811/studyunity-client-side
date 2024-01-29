
const links = [
    {
        id:1,
        url:'/',
        name:'Home',
        
    },

    {
        id:2,
        url:'/about',
        name:'About'
    },

    {
        id:3,
        //customise
        url:'/',
        name:'Our Services',
        submenu:[
            {
                id:1,
                url:'/',
                name:'MBBS Abroad'
            },
            {
                id:2,
                url:'/',
                name:'Study In India',

                submenu:[
                    {
                        id:1,
                        url:'/',
                        name:'MBBS In India'
                    },
                    {
                        id:2,
                        url:'/',
                        name:'Manegement'
                    },
                    {
                        id:3,
                        url:'/',
                        name:'Engineering'
                    }
                ]
            },
           
        ]
    },

    {
        id:5,
        url:'/',
        name:'Blog'
        
    },

    {
        id:6,
        url:'/contact',
        name:'Contact'
    },
]

export default links;