(function (root, name, factory) {
  'use strict';

  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports === freeExports && module
    , freeGlobal = typeof global === 'object' && global;
  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) root = freeGlobal;

  if (typeof define === 'function' && define.amd) define(['exports'], factory);
  else if (freeExports && !freeExports.nodeType) {
    if (freeModule) factory(freeModule.exports);
    else factory(freeExports);
  }
  else factory((root[name] = {}));
}(this, 'assignments', function (exports) {
  'use strict';

  exports.name = 'assignments';
  exports.spec = {
    "a": "[1:0] unexpected identifier 'a' near '<eof>'",
    "a,": "[1:2] <expression> expected near '<eof>'",
    "a,b,c": "[1:5] '=' expected near '<eof>'",
    "a,b =": "[1:5] <expression> expected near '<eof>'",
    "a = 1": {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 1
                }
              },
              "range": [
                0,
                1
              ],
              "isLocal": false
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 4
                },
                "end": {
                  "line": 1,
                  "column": 5
                }
              },
              "range": [
                4,
                5
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 5
            }
          },
          "range": [
            0,
            5
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 5
        }
      },
      "range": [
        0,
        5
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "isLocal": false
        }
      ]
    },
    "a = 1,2,3": {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 1
                }
              },
              "range": [
                0,
                1
              ],
              "isLocal": false
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 4
                },
                "end": {
                  "line": 1,
                  "column": 5
                }
              },
              "range": [
                4,
                5
              ]
            },
            {
              "type": "NumericLiteral",
              "value": 2,
              "raw": "2",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 6
                },
                "end": {
                  "line": 1,
                  "column": 7
                }
              },
              "range": [
                6,
                7
              ]
            },
            {
              "type": "NumericLiteral",
              "value": 3,
              "raw": "3",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 8
                },
                "end": {
                  "line": 1,
                  "column": 9
                }
              },
              "range": [
                8,
                9
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 9
            }
          },
          "range": [
            0,
            9
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 9
        }
      },
      "range": [
        0,
        9
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "isLocal": false
        }
      ]
    },
    "a,b,c = 1": {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 1
                }
              },
              "range": [
                0,
                1
              ],
              "isLocal": false
            },
            {
              "type": "Identifier",
              "name": "b",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 2
                },
                "end": {
                  "line": 1,
                  "column": 3
                }
              },
              "range": [
                2,
                3
              ],
              "isLocal": false
            },
            {
              "type": "Identifier",
              "name": "c",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 4
                },
                "end": {
                  "line": 1,
                  "column": 5
                }
              },
              "range": [
                4,
                5
              ],
              "isLocal": false
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 8
                },
                "end": {
                  "line": 1,
                  "column": 9
                }
              },
              "range": [
                8,
                9
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 9
            }
          },
          "range": [
            0,
            9
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 9
        }
      },
      "range": [
        0,
        9
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "b",
          "loc": {
            "start": {
              "line": 1,
              "column": 2
            },
            "end": {
              "line": 1,
              "column": 3
            }
          },
          "range": [
            2,
            3
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "c",
          "loc": {
            "start": {
              "line": 1,
              "column": 4
            },
            "end": {
              "line": 1,
              "column": 5
            }
          },
          "range": [
            4,
            5
          ],
          "isLocal": false
        }
      ]
    },
    "a,b,c = 1,2,3": {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 1
                }
              },
              "range": [
                0,
                1
              ],
              "isLocal": false
            },
            {
              "type": "Identifier",
              "name": "b",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 2
                },
                "end": {
                  "line": 1,
                  "column": 3
                }
              },
              "range": [
                2,
                3
              ],
              "isLocal": false
            },
            {
              "type": "Identifier",
              "name": "c",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 4
                },
                "end": {
                  "line": 1,
                  "column": 5
                }
              },
              "range": [
                4,
                5
              ],
              "isLocal": false
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 8
                },
                "end": {
                  "line": 1,
                  "column": 9
                }
              },
              "range": [
                8,
                9
              ]
            },
            {
              "type": "NumericLiteral",
              "value": 2,
              "raw": "2",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 10
                },
                "end": {
                  "line": 1,
                  "column": 11
                }
              },
              "range": [
                10,
                11
              ]
            },
            {
              "type": "NumericLiteral",
              "value": 3,
              "raw": "3",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 12
                },
                "end": {
                  "line": 1,
                  "column": 13
                }
              },
              "range": [
                12,
                13
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 13
            }
          },
          "range": [
            0,
            13
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 13
        }
      },
      "range": [
        0,
        13
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "b",
          "loc": {
            "start": {
              "line": 1,
              "column": 2
            },
            "end": {
              "line": 1,
              "column": 3
            }
          },
          "range": [
            2,
            3
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "c",
          "loc": {
            "start": {
              "line": 1,
              "column": 4
            },
            "end": {
              "line": 1,
              "column": 5
            }
          },
          "range": [
            4,
            5
          ],
          "isLocal": false
        }
      ]
    },
    "a.b = 1": {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "b",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 2
                  },
                  "end": {
                    "line": 1,
                    "column": 3
                  }
                },
                "range": [
                  2,
                  3
                ]
              },
              "base": {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 1
                  }
                },
                "range": [
                  0,
                  1
                ],
                "isLocal": false
              },
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 3
                }
              },
              "range": [
                0,
                3
              ]
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 6
                },
                "end": {
                  "line": 1,
                  "column": 7
                }
              },
              "range": [
                6,
                7
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 7
            }
          },
          "range": [
            0,
            7
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 7
        }
      },
      "range": [
        0,
        7
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "isLocal": false
        }
      ]
    },
    "a.b.c = 1": {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "c",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 5
                  }
                },
                "range": [
                  4,
                  5
                ]
              },
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "b",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 2
                    },
                    "end": {
                      "line": 1,
                      "column": 3
                    }
                  },
                  "range": [
                    2,
                    3
                  ]
                },
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 1
                    }
                  },
                  "range": [
                    0,
                    1
                  ],
                  "isLocal": false
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 5
                  }
                },
                "range": [
                  0,
                  5
                ]
              },
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 5
                }
              },
              "range": [
                0,
                5
              ]
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 8
                },
                "end": {
                  "line": 1,
                  "column": 9
                }
              },
              "range": [
                8,
                9
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 9
            }
          },
          "range": [
            0,
            9
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 9
        }
      },
      "range": [
        0,
        9
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "isLocal": false
        }
      ]
    },
    "a[b] = 1": {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 1
                  }
                },
                "range": [
                  0,
                  1
                ],
                "isLocal": false
              },
              "index": {
                "type": "Identifier",
                "name": "b",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 2
                  },
                  "end": {
                    "line": 1,
                    "column": 3
                  }
                },
                "range": [
                  2,
                  3
                ],
                "isLocal": false
              },
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 3
                }
              },
              "range": [
                0,
                3
              ]
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 7
                },
                "end": {
                  "line": 1,
                  "column": 8
                }
              },
              "range": [
                7,
                8
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 8
            }
          },
          "range": [
            0,
            8
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 8
        }
      },
      "range": [
        0,
        8
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "b",
          "loc": {
            "start": {
              "line": 1,
              "column": 2
            },
            "end": {
              "line": 1,
              "column": 3
            }
          },
          "range": [
            2,
            3
          ],
          "isLocal": false
        }
      ]
    },
    "a[b][c] = 1": {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "IndexExpression",
              "base": {
                "type": "IndexExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 1
                    }
                  },
                  "range": [
                    0,
                    1
                  ],
                  "isLocal": false
                },
                "index": {
                  "type": "Identifier",
                  "name": "b",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 2
                    },
                    "end": {
                      "line": 1,
                      "column": 3
                    }
                  },
                  "range": [
                    2,
                    3
                  ],
                  "isLocal": false
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 6
                  }
                },
                "range": [
                  0,
                  6
                ]
              },
              "index": {
                "type": "Identifier",
                "name": "c",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 5
                  },
                  "end": {
                    "line": 1,
                    "column": 6
                  }
                },
                "range": [
                  5,
                  6
                ],
                "isLocal": false
              },
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 6
                }
              },
              "range": [
                0,
                6
              ]
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 10
                },
                "end": {
                  "line": 1,
                  "column": 11
                }
              },
              "range": [
                10,
                11
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 11
            }
          },
          "range": [
            0,
            11
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 11
        }
      },
      "range": [
        0,
        11
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "b",
          "loc": {
            "start": {
              "line": 1,
              "column": 2
            },
            "end": {
              "line": 1,
              "column": 3
            }
          },
          "range": [
            2,
            3
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "c",
          "loc": {
            "start": {
              "line": 1,
              "column": 5
            },
            "end": {
              "line": 1,
              "column": 6
            }
          },
          "range": [
            5,
            6
          ],
          "isLocal": false
        }
      ]
    },
    "a.b[c] = 1": {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "IndexExpression",
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "b",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 2
                    },
                    "end": {
                      "line": 1,
                      "column": 3
                    }
                  },
                  "range": [
                    2,
                    3
                  ]
                },
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 1
                    }
                  },
                  "range": [
                    0,
                    1
                  ],
                  "isLocal": false
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 5
                  }
                },
                "range": [
                  0,
                  5
                ]
              },
              "index": {
                "type": "Identifier",
                "name": "c",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 5
                  }
                },
                "range": [
                  4,
                  5
                ],
                "isLocal": false
              },
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 5
                }
              },
              "range": [
                0,
                5
              ]
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 9
                },
                "end": {
                  "line": 1,
                  "column": 10
                }
              },
              "range": [
                9,
                10
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 10
            }
          },
          "range": [
            0,
            10
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 10
        }
      },
      "range": [
        0,
        10
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "c",
          "loc": {
            "start": {
              "line": 1,
              "column": 4
            },
            "end": {
              "line": 1,
              "column": 5
            }
          },
          "range": [
            4,
            5
          ],
          "isLocal": false
        }
      ]
    },
    "a[b].c = 1": {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "c",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 5
                  },
                  "end": {
                    "line": 1,
                    "column": 6
                  }
                },
                "range": [
                  5,
                  6
                ]
              },
              "base": {
                "type": "IndexExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 1
                    }
                  },
                  "range": [
                    0,
                    1
                  ],
                  "isLocal": false
                },
                "index": {
                  "type": "Identifier",
                  "name": "b",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 2
                    },
                    "end": {
                      "line": 1,
                      "column": 3
                    }
                  },
                  "range": [
                    2,
                    3
                  ],
                  "isLocal": false
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 6
                  }
                },
                "range": [
                  0,
                  6
                ]
              },
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 6
                }
              },
              "range": [
                0,
                6
              ]
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 9
                },
                "end": {
                  "line": 1,
                  "column": 10
                }
              },
              "range": [
                9,
                10
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 10
            }
          },
          "range": [
            0,
            10
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 10
        }
      },
      "range": [
        0,
        10
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "b",
          "loc": {
            "start": {
              "line": 1,
              "column": 2
            },
            "end": {
              "line": 1,
              "column": 3
            }
          },
          "range": [
            2,
            3
          ],
          "isLocal": false
        }
      ]
    },
    "a[b], a[c] = 1": {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 1
                  }
                },
                "range": [
                  0,
                  1
                ],
                "isLocal": false
              },
              "index": {
                "type": "Identifier",
                "name": "b",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 2
                  },
                  "end": {
                    "line": 1,
                    "column": 3
                  }
                },
                "range": [
                  2,
                  3
                ],
                "isLocal": false
              },
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 3
                }
              },
              "range": [
                0,
                3
              ]
            },
            {
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 6
                  },
                  "end": {
                    "line": 1,
                    "column": 7
                  }
                },
                "range": [
                  6,
                  7
                ],
                "isLocal": false
              },
              "index": {
                "type": "Identifier",
                "name": "c",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 8
                  },
                  "end": {
                    "line": 1,
                    "column": 9
                  }
                },
                "range": [
                  8,
                  9
                ],
                "isLocal": false
              },
              "loc": {
                "start": {
                  "line": 1,
                  "column": 6
                },
                "end": {
                  "line": 1,
                  "column": 9
                }
              },
              "range": [
                6,
                9
              ]
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 13
                },
                "end": {
                  "line": 1,
                  "column": 14
                }
              },
              "range": [
                13,
                14
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 14
            }
          },
          "range": [
            0,
            14
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 14
        }
      },
      "range": [
        0,
        14
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "b",
          "loc": {
            "start": {
              "line": 1,
              "column": 2
            },
            "end": {
              "line": 1,
              "column": 3
            }
          },
          "range": [
            2,
            3
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "c",
          "loc": {
            "start": {
              "line": 1,
              "column": 8
            },
            "end": {
              "line": 1,
              "column": 9
            }
          },
          "range": [
            8,
            9
          ],
          "isLocal": false
        }
      ]
    },
    "a().b = 1": {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "b",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 5
                  }
                },
                "range": [
                  4,
                  5
                ]
              },
              "base": {
                "type": "CallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 1
                    }
                  },
                  "range": [
                    0,
                    1
                  ],
                  "isLocal": false
                },
                "arguments": [],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 5
                  }
                },
                "range": [
                  0,
                  5
                ]
              },
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 5
                }
              },
              "range": [
                0,
                5
              ]
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 8
                },
                "end": {
                  "line": 1,
                  "column": 9
                }
              },
              "range": [
                8,
                9
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 9
            }
          },
          "range": [
            0,
            9
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 9
        }
      },
      "range": [
        0,
        9
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "isLocal": false
        }
      ]
    },
    "({})[b] = 1": {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "IndexExpression",
              "base": {
                "type": "TableConstructorExpression",
                "fields": [],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 1
                  },
                  "end": {
                    "line": 1,
                    "column": 3
                  }
                },
                "range": [
                  1,
                  3
                ],
                "inParens": true
              },
              "index": {
                "type": "Identifier",
                "name": "b",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 5
                  },
                  "end": {
                    "line": 1,
                    "column": 6
                  }
                },
                "range": [
                  5,
                  6
                ],
                "isLocal": false
              },
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 6
                }
              },
              "range": [
                0,
                6
              ]
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 10
                },
                "end": {
                  "line": 1,
                  "column": 11
                }
              },
              "range": [
                10,
                11
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 11
            }
          },
          "range": [
            0,
            11
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 11
        }
      },
      "range": [
        0,
        11
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "b",
          "loc": {
            "start": {
              "line": 1,
              "column": 5
            },
            "end": {
              "line": 1,
              "column": 6
            }
          },
          "range": [
            5,
            6
          ],
          "isLocal": false
        }
      ]
    },
    "a\"\"[b] = 1": {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "IndexExpression",
              "base": {
                "type": "StringCallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 1
                    }
                  },
                  "range": [
                    0,
                    1
                  ],
                  "isLocal": false
                },
                "argument": {
                  "type": "StringLiteral",
                  "value": "",
                  "raw": "\"\"",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 1
                    },
                    "end": {
                      "line": 1,
                      "column": 3
                    }
                  },
                  "range": [
                    1,
                    3
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 5
                  }
                },
                "range": [
                  0,
                  5
                ]
              },
              "index": {
                "type": "Identifier",
                "name": "b",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 5
                  }
                },
                "range": [
                  4,
                  5
                ],
                "isLocal": false
              },
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 5
                }
              },
              "range": [
                0,
                5
              ]
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 9
                },
                "end": {
                  "line": 1,
                  "column": 10
                }
              },
              "range": [
                9,
                10
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 10
            }
          },
          "range": [
            0,
            10
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 10
        }
      },
      "range": [
        0,
        10
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "b",
          "loc": {
            "start": {
              "line": 1,
              "column": 4
            },
            "end": {
              "line": 1,
              "column": 5
            }
          },
          "range": [
            4,
            5
          ],
          "isLocal": false
        }
      ]
    },
    "a{}[b] = 1": {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "IndexExpression",
              "base": {
                "type": "TableCallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 1
                    }
                  },
                  "range": [
                    0,
                    1
                  ],
                  "isLocal": false
                },
                "arguments": {
                  "type": "TableConstructorExpression",
                  "fields": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 1
                    },
                    "end": {
                      "line": 1,
                      "column": 3
                    }
                  },
                  "range": [
                    1,
                    3
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 5
                  }
                },
                "range": [
                  0,
                  5
                ]
              },
              "index": {
                "type": "Identifier",
                "name": "b",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 5
                  }
                },
                "range": [
                  4,
                  5
                ],
                "isLocal": false
              },
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 5
                }
              },
              "range": [
                0,
                5
              ]
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 9
                },
                "end": {
                  "line": 1,
                  "column": 10
                }
              },
              "range": [
                9,
                10
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 10
            }
          },
          "range": [
            0,
            10
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 10
        }
      },
      "range": [
        0,
        10
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "b",
          "loc": {
            "start": {
              "line": 1,
              "column": 4
            },
            "end": {
              "line": 1,
              "column": 5
            }
          },
          "range": [
            4,
            5
          ],
          "isLocal": false
        }
      ]
    },
    "({{}})[a][b] = 1": {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "IndexExpression",
              "base": {
                "type": "IndexExpression",
                "base": {
                  "type": "TableConstructorExpression",
                  "fields": [
                    {
                      "type": "TableValue",
                      "value": {
                        "type": "TableConstructorExpression",
                        "fields": [],
                        "loc": {
                          "start": {
                            "line": 1,
                            "column": 2
                          },
                          "end": {
                            "line": 1,
                            "column": 4
                          }
                        },
                        "range": [
                          2,
                          4
                        ]
                      },
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 2
                        },
                        "end": {
                          "line": 1,
                          "column": 4
                        }
                      },
                      "range": [
                        2,
                        4
                      ]
                    }
                  ],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 1
                    },
                    "end": {
                      "line": 1,
                      "column": 5
                    }
                  },
                  "range": [
                    1,
                    5
                  ],
                  "inParens": true
                },
                "index": {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 7
                    },
                    "end": {
                      "line": 1,
                      "column": 8
                    }
                  },
                  "range": [
                    7,
                    8
                  ],
                  "isLocal": false
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 11
                  }
                },
                "range": [
                  0,
                  11
                ]
              },
              "index": {
                "type": "Identifier",
                "name": "b",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 10
                  },
                  "end": {
                    "line": 1,
                    "column": 11
                  }
                },
                "range": [
                  10,
                  11
                ],
                "isLocal": false
              },
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 11
                }
              },
              "range": [
                0,
                11
              ]
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 15
                },
                "end": {
                  "line": 1,
                  "column": 16
                }
              },
              "range": [
                15,
                16
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 16
            }
          },
          "range": [
            0,
            16
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 16
        }
      },
      "range": [
        0,
        16
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "loc": {
            "start": {
              "line": 1,
              "column": 7
            },
            "end": {
              "line": 1,
              "column": 8
            }
          },
          "range": [
            7,
            8
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "b",
          "loc": {
            "start": {
              "line": 1,
              "column": 10
            },
            "end": {
              "line": 1,
              "column": 11
            }
          },
          "range": [
            10,
            11
          ],
          "isLocal": false
        }
      ]
    },
    "(a).b = 1": {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "b",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 5
                  }
                },
                "range": [
                  4,
                  5
                ]
              },
              "base": {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 1
                  },
                  "end": {
                    "line": 1,
                    "column": 2
                  }
                },
                "range": [
                  1,
                  2
                ],
                "isLocal": false,
                "inParens": true
              },
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 5
                }
              },
              "range": [
                0,
                5
              ]
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 8
                },
                "end": {
                  "line": 1,
                  "column": 9
                }
              },
              "range": [
                8,
                9
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 9
            }
          },
          "range": [
            0,
            9
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 9
        }
      },
      "range": [
        0,
        9
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "loc": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 2
            }
          },
          "range": [
            1,
            2
          ],
          "isLocal": false,
          "inParens": true
        }
      ]
    },
    "(1).a = 0": {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 5
                  }
                },
                "range": [
                  4,
                  5
                ]
              },
              "base": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 1
                  },
                  "end": {
                    "line": 1,
                    "column": 2
                  }
                },
                "range": [
                  1,
                  2
                ],
                "inParens": true
              },
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 5
                }
              },
              "range": [
                0,
                5
              ]
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 0,
              "raw": "0",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 8
                },
                "end": {
                  "line": 1,
                  "column": 9
                }
              },
              "range": [
                8,
                9
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 9
            }
          },
          "range": [
            0,
            9
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 9
        }
      },
      "range": [
        0,
        9
      ],
      "comments": [],
      "globals": []
    },
    "0 = 0": "[1:0] unexpected number '0' near '='",
    "\"foo\" = 0": "[1:0] unexpected string 'foo' near '='",
    "true = 0": "[1:0] unexpected boolean 'true' near '='",
    "(a) = 0": "[1:4] invalid left-hand side of assignment near '='",
    "{} = 0": "[1:0] unexpected symbol '{' near '}'",
    "a:b() = 0": "[1:6] invalid left-hand side of assignment near '='",
    "a() = 0": "[1:4] invalid left-hand side of assignment near '='",
    "a.b:c() = 0": "[1:8] invalid left-hand side of assignment near '='",
    "a[b]() = 0": "[1:7] invalid left-hand side of assignment near '='",
    "a = a b": "[1:6] unexpected identifier 'b' near '<eof>'",
    "a = 1 2": "[1:6] unexpected number '2' near '<eof>'",
    "a = a = 1": "[1:6] unexpected symbol '=' near '1'"
  };
}));
