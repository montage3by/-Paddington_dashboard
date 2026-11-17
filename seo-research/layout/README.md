# Blog layout for paddingtonparkdubai.com (Tilda)

All files are code for Tilda HTML blocks (T123). Paste each file into its own block, in full.

| File | What it is | Where it goes |
|---|---|---|
| `blog/1-header.html` | Menu from the home page, without the first screen. Menu links lead to sections of the home page, plus a new "Parent Guides" item. The logo links to the home page | First block on the blog page and on every article page |
| `blog/2-blog-listing.html` | Blog listing: header, topic filter, article cards, CTA | Blog page `/blog`, second block |
| `2026-11-17_khda-nursery-licence-ratings.html` | Article 1 with photos, FAQ and Schema markup (Article, FAQPage, BreadcrumbList) | Article page `/blog/khda-nursery-licence-ratings`, second block |
| `blog/3-footer.html` | Block 5 from the home page: WhatsApp bar, map, footer and the menu/footer mechanics. Footer links lead to the home page, plus a "Parent Guides" link | Last block on every blog page |

Between the content block and the footer, keep the standard Tilda form block "COME AND SEE PADDINGTON PARK". The "Book a tour" buttons scroll to it.

## Blog page `/blog`

1. Use the copy of the home page you already made ("Copy of Paddington…").
2. Block 1 (header and first screen): replace its code with `blog/1-header.html`.
3. Delete the HTML blocks for Our Space and the team, ages, the principal's letter and camps. Keep the form block.
4. Add an HTML block (T123) under the header and paste `blog/2-blog-listing.html`.
5. Last block (map and footer): replace its code with `blog/3-footer.html`.
6. Page settings:
   - Address: `blog`
   - Title: `Parent Guides: Choosing a Nursery in Dubai | Paddington Park`
   - Description: `Practical guides for parents in Dubai: KHDA licences, the British EYFS, holiday camps and settling in, from Paddington Park, a British nursery in Arjan.`
   - Social image: any campus photo.
7. Publish.

## Article page `/blog/khda-nursery-licence-ratings`

1. Duplicate the finished blog page.
2. Replace the listing block code with `2026-11-17_khda-nursery-licence-ratings.html`.
3. Page settings:
   - Address: `blog/khda-nursery-licence-ratings`
   - Title: `KHDA Rating for Nurseries in Dubai: Licences Explained`
   - Description: `Is there a KHDA rating for nurseries in Dubai? What a KHDA licence means, how to check a licensed nursery and what to ask on a tour.`
4. Publish.

## How future articles appear on `/blog`

The cards for 20, 24 and 27 November already sit in the listing. Until their date (midnight Dubai time) they show "Coming …" and have no link. On the date they become a normal link automatically. Each article page must be published by its date, at the address in the card:
- `/blog/winter-camp-toddlers-dubai`
- `/blog/choose-british-nursery-dubai`
- `/blog/eyfs-british-nursery-vs-montessori`

## Notes

- Photos are the site's own images from optim.tildacdn.com, with the same alt text as on the home page.
- Link to the blog from the home page too: add a "Parent Guides" item to the home page menu, or take the footer link from `blog/3-footer.html`. Without an internal link from the home page, Google will find the blog only through the sitemap.
- The internal link to "how to choose a British nursery in Dubai" in article 1 goes to a page that only goes live on 24 November. Until then it returns 404. Either publish the article page earlier, or remove the link until then.
