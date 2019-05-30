module.exports = {
    title: "Droop's Dragoons",
    description: "A record of the Forgotten Realms' most terrifying adventuring group",

    themeConfig: {
        repo: 'owlmanatt/droops-dragoons',
        editLinks: true,

        sidebar: [
            '/',
            {
                title: '13th Age',
                collapsable: false,
                children: [
                    '',
                    'characters',
                    'adventures',
                ].map(page => '13th-age/' + page)
            },
            {
                title: "Forgotten Realms",
                collapsable: false,
                children: [
                    'forgotten-realms/',
                    {
                        title: "Adventures",
                        collapsable: false,
                        children: [
                            'waterdeep_2019'
                        ].map(page => 'forgotten-realms/adventures/' + page),
                    },
                ],
            },
        ]
    }
}