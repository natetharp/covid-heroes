# Covid Heroes
A memorial to those that have lost their lives fighting the COVID-19 pandemic.

---

### Data Resources
- [Covid Heroes Twitter feed](https://twitter.com/HeroesCovid)
- [Medscape Memorial](https://www.medscape.com/viewarticle/927976)
- [Memorial Page](https://nursingnotes.co.uk/covid-19-memorial/) from [Nursing Notes](https://twitter.com/NursingNotesUK/)
- [List of Italain medical professional casualties](https://portale.fnomceo.it/elenco-dei-medici-caduti-nel-corso-dellepidemia-di-covid-19/)
- [NYSNA Nurses Memorial](https://www.nysna.org/memoriam-fallen-nysna-nurses)
- https://twitter.com/Covid19Docs
- https://www.facebook.com/groups/317464005892297/

### Alternate Data Types
- [Transit Workers Union Memorial](http://www.twulocal100.org/memoriam)

### Former Data Resources
- ~~[Spreadsheet](https://docs.google.com/spreadsheets/d/1jlqsf3MVYyLBFewxO3MHkgGsXZOzrteo18t9ZljUIMg/edit#gid=1746956167) by [Jacques Fortier](https://twitter.com/jacquesgt)~~
- ~~[Spreadsheet](https://docs.google.com/spreadsheets/d/1pFdoZqjnDRaSzJi0JJJ3f5zdb87Q5tL3zc4nGx1nejI/edit#gid=1744604459) by [C. Michael Gibson MD](https://twitter.com/CMichaelGibson)~~
- ~~[Expanded bios from Design To Combat COVID-19](https://docs.google.com/document/d/13OGjxdv1MKCvRGWg8sHRvaU0LNoMNl2RNlmC6YoXRUw/edit)~~

---

## Running code locally
After cloning the repo, navigate to the correct folder and install Jekyll, and any necessary dependencies.


### Installation
Jekyll is a Ruby program so you need to install Ruby on your machine to begin with. Head over to the [install guide](https://jekyllrb.com/docs/installation/) and follow the instructions for your operating system.

With Ruby setup you can install Jekyll by running the following in your terminal:
```
gem install jekyll bundler
```

To create a new `Gemfile` to list your project’s dependencies run:
```
bundle init
```

Now edit the `Gemfile` and add jekyll as a dependency:
```
gem "jekyll"
```

Finally run `bundle` to install jekyll for your project.

You can now prefix all jekyll commands listed in this tutorial with `bundle exec` to make sure you use the jekyll version defined in your `Gemfile`.


### Build
Jekyll is a static site generator so we need Jekyll to build the site before we can view it. There are two commands you can run in the root of your site to build it:

- `jekyll build` - Builds the site and outputs a static site to a directory called `_site`.
- `jekyll serve` - Does the same thing except it rebuilds any time you make a change and runs a local web server at `http://localhost:4000`.

When you’re developing a site you’ll use jekyll serve as it updates with any changes you make.

Run `jekyll serve` and go to [http://localhost:4000](http://localhost:4000) in your browser.
