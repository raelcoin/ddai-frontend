export default {
    selectedNetwork: 'kovan',
    kovan: {
        daiAddress: "0xC4375B7De8af5a38a93548eb8453a498222C4fF2",
        ddaiAddress: "0x9ee09f6564a5241508029f9451558dd58d3b957b",
        recipes: {
            DAI: {
                title: "Earn DAI",
                description: "Start earning {interestRate}% on DAI. Your interest is automatically accrued in your wallet",
                warning: {
                    message: "⚠️ DAI is a collateralized asset",
                    link: 'https://www.youtube.com/watch?v=CbjBJ_KrknQ',
                    bg: '#fff7f1',
                    border: '#ffc07e',
                },

                link: null,
                img: "../../images/actionCardDAI.png",
                imgRecap: "../../images/recap_DAI.png",
                recipeData: {
                    receivers: [
                        
                    ],
                    data: [
                        
                    ],
                    ratios: [
                        
                    ],
                }
            },
            ETH: {
                title: "Earn Ether",
                description: "Start earning {interestRate}% on DAI while automatically converting your gains to ETH",
                img: "../../images/actionCardEth.png",
                imgRecap: "../../images/recap_ETH.png",
                recipeData: {
                    receivers: [
                        "0xdd7abc70d52032ec0960cac6e7d9acf42f9acbfb"
                    ],
                    data: [
                        "0x000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000{userAddress}"
                    ],
                    ratios: [
                        "100"
                    ],
                }
            },
            ETH4X: {
                title: "Long ETH x4",
                description: "Start earning {interestRate}% on DAI while automatically going long x4 on ETH with your gains",
                warning: {
                    message: "⚠️ This is a leveraged position",
                    link: 'https://medium.com/bzxnetwork/introducing-fulcrum-tokenized-margin-made-dead-simple-e65ccc82393f',
                    bg: '#fff7f1',
                    border: '#ffc07e',
                },
                img: "../../images/ethlong4x.png",
                imgRecap: "../../images/recap_ETH.png",
                recipeData: {
                    receivers: [
                        "0xfa60c27d0f894df8f1cf3b919be49099b09e6cac"
                    ],
                    data: [
                        "0x0000000000000000000000000E5f87BDcD6285F930b6bbcC3E21CA9d985e12fE"
                    ],
                    ratios: [
                        "100"
                    ],
                }
            },
            ETHS4X: {
                title: "Short ETH x4",
                description: "Start earning {interestRate}% on DAI while automatically going short x4 on ETH with your gains",
                warning: {
                    message: "⚠️ This is a short position",
                    link: 'https://medium.com/bzxnetwork/introducing-fulcrum-tokenized-margin-made-dead-simple-e65ccc82393f',
                    bg: '#fff7f1',
                    border: '#ffc07e',
                },
                warning: {
                    message: "blabalabalsnfaskd",
                    link: '',
                    bg: '',
                    border: '',
                },
                img: "../../images/ethshort4x.png",
                imgRecap: "../../images/recap_ETH.png",
                recipeData: {
                    receivers: [
                        "0xfa60c27d0f894df8f1cf3b919be49099b09e6cac"
                    ],
                    data: [
                        "0x00000000000000000000000009486ac55ed81758787fcdda98e6Ce35b01CDBE72"
                    ],
                    ratios: [
                        "100"
                    ],
                }
            },
            SOV: {
                title: "Store of Value",
                description: "Start earning {interestRate}% on DAI and convert gains to sBTC and sXAU (synthetix gold)",
                img: "../../images/actionCardsBTCsXAU.png",
                imgRecap: "../../images/recap_sXAUsBTC.png",
                recipeData: {
                    receivers: [
                        "0xfa60c27d0f894df8f1cf3b919be49099b09e6cac",
                        "0xe1f5a9cbd60d6d7d1f443e70fa572b5ad255607b"
                    ],
                    data: [
                        "0x0000000000000000000000000E5f87BDcD6285F930b6bbcC3E21CA9d985e12fE",
                        "0x7342544300000000000000000000000000000000000000000000000000000000000000000000000000000000{userAddress}"
                    ],
                    ratios: [
                        "50",
                        "50"
                    ],
                }
            },
            KNC: {
                title: "Earn KNC",
                description: "Start earning {interestRate}% on DAI while automatically converting your gains to KNC",
                img: "../../images/actionCardKNC.png",
                imgRecap: "../../images/recap_KNC.png",
                recipeData: {
                    receivers: [
                        "0xdd7abc70d52032ec0960cac6e7d9acf42f9acbfb"
                    ],
                    data: [
                        "0x000000000000000000000000ad67cB4d63C9da94AcA37fDF2761AaDF780ff4a2000000000000000000000000{userAddress}"
                    ],
                    ratios: [
                        "100"
                    ],
                }
            },
            // COMPOUNDREPAYDAI: {
            //     title: "Repay Compound DAI Loan",
            //     description: "Start earning {interestRate}% on DAI while automatically repaying your DAI loan on compound",
            //     // TODO update image
            //     img: "../../images/actionCardCompoundLoan.png",
            //     // TODO setup data
            //     recipeData: {
            //         receivers: [
            //             "0xdd7abc70d52032ec0960cac6e7d9acf42f9acbfb"
            //         ],
            //         data: [
            //             "0x000000000000000000000000aaf64bfcc32d0f15873a02163e7e500671a4ffcd000000000000000000000000{userAddress}"
            //         ],
            //         ratios: [
            //             "100"
            //         ],
            //     }
            // },
            // FULCRUMREPAYDAI: {
            //     title: "Repay Fulcrum DAI loan",
            //     description: "Start earning {interestRate}% on DAI while automatically repaying your DAI loan on Fulcrum",
            //     // TODO update image
            //     img: "../../images/actionCardFulcrum.png",
            //     // TODO setup data
            //     recipeData: {
            //         receivers: [
            //             "0xdd7abc70d52032ec0960cac6e7d9acf42f9acbfb"
            //         ],
            //         data: [
            //             "0x000000000000000000000000aaf64bfcc32d0f15873a02163e7e500671a4ffcd000000000000000000000000{userAddress}"
            //         ],
            //         ratios: [
            //             "100"
            //         ],
            //     }
            // },
            XTZ : {
                title: "Earn sXTZ(Tezos)",
                description: "Start earning {interestRate}% on DAI while automatically converting your gains to sXTZ on Syntetix",
                img: "../../images/actionCardsXTZ.png",
                imgRecap: "../../images/recap_sXTZ.png",
                recipeData: {
                    receivers: [
                        "0xe1f5a9cbd60d6d7d1f443e70fa572b5ad255607b"
                    ],
                    data: [
                        "0x7358545a00000000000000000000000000000000000000000000000000000000000000000000000000000000{userAddress}"
                    ],
                    ratios: [
                        "100"
                    ],
                }
            },
            GOLD : {
                title: "Earn sXAU(Gold)",
                description: "Start earning {interestRate}% on DAI while automatically converting your gains to sXAU on Syntetix",
                img: "../../images/actionCardsXAU.png",
                imgRecap: "../../images/recap_sXAU.png",
                warning: {
                    message: "This is a synthetic asset",
                    link: 'https://www.synthetix.io/',
                    bg: '#fff7f1',
                    border: '#ffc07e',
                },
                recipeData: {
                    receivers: [
                        "0xe1f5a9cbd60d6d7d1f443e70fa572b5ad255607b"
                    ],
                    data: [
                        "0x7358415500000000000000000000000000000000000000000000000000000000000000000000000000000000{userAddress}"
                    ],
                    ratios: [
                        "100"
                    ],
                }
            },
            SBTC : {
                title: "Earn sBTC",
                description: "Start earning {interestRate}% on DAI while automatically converting your gains to sBTC",
                warning: {
                    message: "⚠️ sBTC is a synthetic asset",
                    link: 'https://blog.synthetix.io/q1-release-sbtc-and-more/',
                    bg: '#fff7f1',
                    border: '#ffc07e',
                },
                img: "../../images/actionCardsbtc.png",
                imgRecap: "../../images/recap_sBTC.png",
                recipeData: {
                    receivers: [
                        "0xe1f5a9cbd60d6d7d1f443e70fa572b5ad255607b"
                    ],
                    data: [
                        "0x7342544300000000000000000000000000000000000000000000000000000000000000000000000000000000{userAddress}"
                    ],
                    ratios: [
                        "100"
                    ],
                }
            },
            ETHSBTC : {
                title: "Earn ETH and sBTC",
                description: "Start earning {interestRate}% on DAI while automatically converting your gains to ETH and sBTC",
                warning: {
                    message: "⚠️ This recipe uses a synthetic asset",
                    link: 'https://blog.synthetix.io/q1-release-sbtc-and-more/',
                    bg: '#fff7f1',
                    border: '#ffc07e',
                },
                img: "../../images/actionCardETHsBTC.png",
                imgRecap: "../../images/recap_sBTC.png",
                recipeData: {
                    receivers: [
                        "0xdd7abc70d52032ec0960cac6e7d9acf42f9acbfb",
                        "0xe1f5a9cbd60d6d7d1f443e70fa572b5ad255607b"
                    ],
                    data: [
                        "0x000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000{userAddress}",
                        "0x7342544300000000000000000000000000000000000000000000000000000000000000000000000000000000{userAddress}"
                    ],
                    ratios: [
                        "50",
                        "50"
                    ],
                }
            },
            ETHMAXI : {
                title: "ETH Maximalist",
                description: "Start earning {interestRate}% on DAI while automatically converting your gains to ETH and iBTC",
                warning: {
                    message: "⚠️ iBTC is an inverse synthetic asset",
                    link: 'https://blog.synthetix.io/q1-release-sbtc-and-more/',
                    bg: '#fff7f1',
                    border: '#ffc07e',
                },
                img: "../../images/actionCardETHiBTC.png",
                imgRecap: "../../images/recap_ETH.png",
                recipeData: {
                    receivers: [
                        "0xdd7abc70d52032ec0960cac6e7d9acf42f9acbfb",
                        "0xe1f5a9cbd60d6d7d1f443e70fa572b5ad255607b"
                    ],
                    data: [
                        "0x000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000{userAddress}",
                        "0x6942544300000000000000000000000000000000000000000000000000000000000000000000000000000000{userAddress}"
                    ],
                    ratios: [
                        "50",
                        "50"
                    ],
                }
            },
            BTCMAXI : {
                title: "BTC Maximalist",
                description: "Start earning {interestRate}% on DAI while automatically converting your gains to iETH and sBTC",
                warning: {
                    message: "⚠️ This recipe uses an inverse synthetic asset",
                    link: 'https://blog.synthetix.io/q1-release-sbtc-and-more/',
                    bg: '#fff7f1',
                    border: '#ffc07e',
                },
                img: "../../images/actionCardiETHsBTC.png",
                imgRecap: "../../images/recap_sBTC.png",
                recipeData: {
                    receivers: [
                        "0xe1f5a9cbd60d6d7d1f443e70fa572b5ad255607b",
                        "0xe1f5a9cbd60d6d7d1f443e70fa572b5ad255607b"
                    ],
                    data: [
                        "0x7342544300000000000000000000000000000000000000000000000000000000000000000000000000000000{userAddress}",
                        "0x6945544800000000000000000000000000000000000000000000000000000000000000000000000000000000{userAddress}"
                    ],
                    ratios: [
                        "50",
                        "50"
                    ],
                }
            },
            WBTC4X: {
                title: "Long WBTC x4",
                description: "Not working on kovan. WBTC is not supported on kovan fulcrum. :(",
                warning: {
                    message: "⚠️ This is a leveraged position",
                    link: 'https://medium.com/bzxnetwork/introducing-fulcrum-tokenized-margin-made-dead-simple-e65ccc82393f',
                    bg: '#FFDC61',
                    border: '#ffc07e',
                },
                img: "../../images/actionCardLong4xBTC.png",
                recipeData: {
                    receivers: [
                        "0xfa60c27d0f894df8f1cf3b919be49099b09e6cac"
                    ],
                    data: [
                        "0x0000000000000000000000000E5f87BDcD6285F930b6bbcC3E21CA9d985e12fE"
                    ],
                    ratios: [
                        "100"
                    ],
                },
                disabled: true
            },
            WBTCETH: {
                title: "Earn Ether & WBTC",
                description: "Start earning {interestRate}% on DAI while automatically converting your gains to WBTC and ETH",
                img: "../../images/actionCardEthWbtc.png",
                recipeData: {
                    receivers: [
                        "0xdd7abc70d52032ec0960cac6e7d9acf42f9acbfb",
                        "0xdd7abc70d52032ec0960cac6e7d9acf42f9acbfb"
                    ],
                    data: [
                        "0x000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000{userAddress}",
                        // This is actually MKR, WBTC is not supported on kovan
                        "0x000000000000000000000000aaf64bfcc32d0f15873a02163e7e500671a4ffcd000000000000000000000000{userAddress}"
                    ],
                    ratios: [
                        "50",
                        "50"
                    ],
                },
                disabled: true
            },
            WBTC: {
                title: "Earn WBTC",
                description: "Start earning {interestRate}% on DAI while automatically converting your gains to WBTC",
                img: "../../images/actionCardWbtc.png",
                recipeData: {
                    receivers: [
                        "0xdd7abc70d52032ec0960cac6e7d9acf42f9acbfb"
                    ],
                    data: [
                        // This is actually MKR, WBTC is not supported on kovan
                        "0x000000000000000000000000aaf64bfcc32d0f15873a02163e7e500671a4ffcd000000000000000000000000{userAddress}"
                    ],
                    ratios: [
                        "100"
                    ],
                },
                disabled: true
            },
        }
    }
}