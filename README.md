# Emergent Alliance Datahub
![Catalogue Updates](https://github.com/patricklake2/emer2gent-datahub/workflows/Update%20Catalogue/badge.svg)

This is the repo for the [Emergent Alliance Datahub website](https://emer2gent.netlify.app).
The site is a catalogue of data which is being used, or published, by members of the [Emergent Alliance](https://emer2gent.org).

This website was developed to act as a central hub for data being used, or published by, members of the [Emergent Alliance](https://emer2gent.org).

## Data
The catalogue is not a datastore, and is not intended to replace any existing infrastructure - just compliment it.
Rather than storing the actual datasets, the catalogue stores **metadata**, describing these datasets, and linking to them.

This means that any dataset which is on the web, regardless of where exactly it is stored, can be added to the catalogue very easily, just by adding a few simple bits of metadata and it's URL.

There is detailed information on how the catalogue works in the [ODI Leeds Emergent Repo](https://github.com/odileeds/emer2gent-data).

## Site
The website is still in beta, and is currently quite basic. The 2 main features are:

### Catalogue
* Main page - list of organisations, and all datasets
* A sub-page for each contributing organisation (ie. each index of datasets)
* A page for each dataset, displaying all its metadata, resources and references
    
### Form
There is a form on the site to allow the user to add a dataset, with full metadata, to a designated public index we have created. The process for this is:
* User completes the form, and some simple validation is performed
* There is a choice to submit the form to the public index, or download their entry as JSON, so it could be added to a different index
* Submitting the form triggers a Pipedream workflow which creates a branch, appends the form entry to the public index, and creates a pull request
* This pull request is then manually reviewed and merged
