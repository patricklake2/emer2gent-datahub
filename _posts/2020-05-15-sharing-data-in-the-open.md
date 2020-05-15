---
layout: post
title: Sharing (meta)data in the Open
desc: A short blog about why this site was created, and the benefits of this approach
author: Patrick Lake
class: c4-bg
---
At [ODI Leeds](https://odileeds.org), we're no strangers to working openly (the clue is in the name!). We've seen the huge benefits it brings in terms of collaboration, efficiency, and time saved - that's why we thought it was important to set up a central place where everyone from the Emergent Alliance can share datasets which they are using, or publishing. By putting everything in **one place**, we make it much easier for us all to be able to find the data we need, see what data everyone else is using, and quickly get metadata surrounding it.

This is a catalogue of **metadata**. It doesn't try to be something it’s not. It's not a datastore, or a data science platform, nor is it intended to replace any existing infrastructure or platforms. Instead, it is very simply a tool to allow us all to **share information and metadata** around the datasets we are using and publishing. The data itself could be stored anywhere on the web, but by providing the URL in the metadata, it can still be accessed through this site. Perhaps the data isn't publicly available, or isn't on the web - that's fine - you can still add the metadata around it to this site. Even if that's just a short description of the data, people then know that dataset is available, and who has it, whereas before, they might not have even known it existed.

I will write a separate technical blog about the infrastructure behind the catalogue, but it's quite simple. All the details are in [our GitHub Repo](https://github.com/odileeds/emer2gent-data). It's essentially just a collection of JSON files stored on the web. We've tried to make it as flexible as possible whilst maintaining some structure. The concept is that metadata about datasets will be stored in a series of JSON index files. Each organisation can create their own index, which could be stored anywhere on the web. It could even be an API endpoint rather than a static JSON file (as long as [the schema](https://github.com/odileeds/emer2gent-data/blob/master/schemas/subindex-v1.0.json) matches). This means whoever created the index maintains full control over it, and can add, update, and remove datasets freely, without needing permission. Once an organisation creates an index, they simply need to add the URL to our [master index file](https://github.com/odileeds/emer2gent-data/blob/master/index.json). This is the only part of the process which requires any intervention on our part, and it only needs to be done once.

{% include figure.html src="/assets/img/sample-meta.png" link="https://github.com/odileeds/covid-19/blob/master/index.json" caption="A sample piece of metadata" %}

Maybe you have one or two datasets which you think are worthy of sharing, but creating an index is too much hassle. That's fine too. There's [a form](/add/index.html) on this site which allows you to add a dataset to a [special 'public' index](https://github.com/odileeds/emer2gent-data/blob/master/form-submissions.json) we have created specifically for this purpose. You can even use that form to generate a JSON object for a dataset to copy and paste into your own index.

{% include figure.html src="/assets/img/form-screenshot.png" link="/add" caption="The 'add data' form" %}

It's hard to understate the benefits that something as simple as this brings, but it only works if we all get involved, so please - start adding data. If you need help or have feedback, use the Emergent Microsoft Teams channel, or open an [issue on GitHub](https://github.com/odileeds/emer2gent-data/issues/new). I don't know exactly what this should look like - it's not a finished product, and probably never will be. If something can be improved, it should be, so feel free to give us feedback, ideas, and suggestions. As the Alliance expands, it becomes more and more important to have a collaborative, open platform to share data. We all have data, and we all need data. Why make it harder to find?

