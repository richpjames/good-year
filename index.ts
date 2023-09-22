const BASEURL = "https://en.wikipedia.org/wiki/";

export const params = (req: Request): Array<string> => {
  return Array.from(new URL(req.url).searchParams.values());
};

Bun.serve({
  fetch(req: Request) {
    const [year1, year2] = params(req);

    const wikiUrl = `${BASEURL}AD_${year1}${year2}`;

    console.log(`Redirecting to ${wikiUrl}`);

    return Response.redirect(wikiUrl);
  },
});
