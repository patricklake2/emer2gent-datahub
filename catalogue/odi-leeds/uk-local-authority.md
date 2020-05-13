---
layout: dataset
title: Catalogue | uk-local-authority
data:
  id: uk-local-authority
  sharing: public
  topics:
    - health
    - timeline
  tags:
    - UTLA
    - Local Authority
    - cases
    - '#OpenDataSavesLives'
  licence: MIT
  createdAt: '2020-04-02T12:00Z'
  updatedAt: '2020-05-01T12:00Z'
  update_frequency: daily
  title: '#OpenDataSavesLives COVID-19 tools'
  author: ODI Leeds
  author_email: hello@odileeds.org
  url: 'https://odileeds.org/'
  maintainer: Stuart Lowe
  maintainer_email: stuart.lowe@odileeds.org
  description: 'Resources created as part of #OpenDataSavesLives at ODI Leeds.'
  resources:
    - type: vis
      format: html
      title: Local Authority COVID-19 dashboard
      description: >-
        A dashboard of confirmed cases split by Local Authority. The dashboard
        includes a graph, a hexagon cartogram of Local Authorities, and a
        timeline by Upper Tier Local Authority.
      url: 'https://odileeds.github.io/covid-19/LocalAuthorities/'
    - type: data
      format: json
      check_size: 59150
      temporal_coverage_from: '2020-01-30'
      temporal_coverage_to: '2020-05-01'
      title: Cumulative confirmed cases by UK Upper Tier Local Authority
      description: >-
        This is a processed version of Tom White's compiled UK data to reduce
        file size.
      url: >-
        https://raw.githubusercontent.com/odileeds/covid-19/master/LocalAuthorities/data/utla.json
  references:
    - url: >-
        https://github.com/tomwhite/covid-19-uk-data/blob/master/data/covid-19-cases-uk.csv
      description: >-
        Daily counts of confirmed cases for (upper tier) local authorities in
        England, health boards in Scotland and Wales, and local government
        district for Northern Ireland. Note that prior to 18 March 2020 Wales
        data was broken down by local authority, not heath board, and prior to
        27 March 2020 there were no breakdowns by area for Northern Ireland.

---