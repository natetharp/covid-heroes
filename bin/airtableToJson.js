#!/usr/bin/env node

const fs = require('fs')
const dotenv = require('dotenv').config()
var path = require('path')
var appDir = path.dirname(require.main.filename)
const Airtable = require('airtable')
const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
  process.env.AIRTABLE_BASE
)

let recordFieldsJSON = []

base('Active')
  .select({
    maxRecords: 9999,
    view: 'Grid view',
    sort: [
      { field: 'last_name', direction: 'asc' },
      { field: 'death_date', direction: 'asc' },
      { field: 'country', direction: 'asc' },
    ],
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
      records.forEach(function (record) {
        recordFieldsJSON.push(record.fields)
        // console.log(record.fields)
        // generatePost(record.fields)
      })
      fetchNextPage()
    },
    function done(err) {
      if (err) {
        console.error(err)
        return
      }
      try {
        const fileName = 'active.json'
        console.log(`Writing to _data/${fileName}`)
        fs.writeFileSync(
          `${appDir}/../_data/${fileName}`,
          JSON.stringify(recordFieldsJSON, null, 2)
        )
      } catch (err) {
        console.error(err)
      }
    }
  )

base('Active')
  .select({
    view: 'Grid view',
  })
  .firstPage(function (err, records) {
    if (err) {
      console.error(err)
      return
    }
    records.forEach(function (record) {
      console.log('Retrieved', record.get('last_name'))
    })
  })

