module.exports = {
    title: "Droop's Dragoons",
    description: "A record of the Forgotten Realms' most terrifying adventuring group",

    themeConfig: {
        sidebar: [
            '/',
            {
                title: "Adventures",
                collapsable: false,
                children: [
                    'waterdeep_2019'
                ].map(page => 'adventures/' + page)
            }
        ]
    }
}