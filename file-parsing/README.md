# Beacon-vector-file generator

The goal of this exercise is to generate a list that contains all beacons at certain timestamps with their corresponding support vector.

- As input we have a database which we collected during a beacon tracking test.
- The table is made from logs of signal levels (in dbm) from different wifi antennas.
- At every timestamp we did a recording of each of these antennas in a way that yields table entries.

Data sample:

```json
[
  {
    "BeaconId": 101,
    "ant_id": 103,
    "dbm_ant": -68.74636830519334,
    "timestamp": "1999-06-17 00:11:00"
  },
  {
    "BeaconId": 101,
    "ant_id": 101,
    "dbm_ant": -77.80792406374334,
    "timestamp": "1999-06-17 00:11:00"
  },
  {
    "BeaconId": 101,
    "ant_id": 106,
    "dbm_ant": -53.139973206690684,
    "timestamp": "1999-06-17 00:11:00"
  },
  {
    "BeaconId": 303,
    "ant_id": 102,
    "dbm_ant": -84.76679099514944,
    "timestamp": "1999-06-17 00:12:00"
  },
  {
    "BeaconId": 101,
    "ant_id": 105,
    "dbm_ant": -19.698948991976884,
    "timestamp": "1999-06-17 00:11:00"
  },
  {
    "BeaconId": 303,
    "ant_id": 101,
    "dbm_ant": -46.17761120301083,
    "timestamp": "1999-06-17 00:12:00"
  },
  {
    "BeaconId": 303,
    "ant_id": 104,
    "dbm_ant": -68.58154321681343,
    "timestamp": "1999-06-17 00:12:00"
  }
]
```

# Task:
In order to do further calculations we need a file wich maps the beacon id + timestamp to a given array of antennas (see ``index.js``, please keep the order in the array) with all the recorded dbm values (if a dbm value is missing a default value of ``-135`` should be assigned).

- Please write a script in `index.js` which outputs the vectors for all beacons.
- Do not assume that the beacons nor the timestamps will be sorted.
- The input file can be found in ``input.json``.
- The output can be logged to the console or be written to a file.


Sample output based on the data sample above and with antena IDs [101,102,103,104,105,106]:

```js
[
  {
    "beacon": "101, 1999-06-17T00:11:00.000Z",
    "vector": [
      -77.80792406374334,
      -135,
      -68.74636830519334,
      -135,
      -19.698948991976884,
      -53.139973206690684
    ]
  },
  {
    "beacon": "303, 1999-06-17T00:12:00.000Z",
    "vector": [
      -46.17761120301083,
      -84.76679099514944,
      -135,
      -68.58154321681343,
      -135,
      -135
    ]
  }
]
```

**BONUS:** The table we use in production has more than 3 Million entries. Write the code so it can handle large amount of IO data.
