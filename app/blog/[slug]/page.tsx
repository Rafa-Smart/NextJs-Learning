import * as React from 'react'

type TypeParamsSingleSlug = {
  params: {
    slug: string;
  };
};

// bisa pake props tapi nanti props.params.slug
// atau lanusng {params} jdi params.slug
export default async function BlogPageSingleSlug(props: TypeParamsSingleSlug) {
  // jadi params itu async ya jadi harus pake await atau pakai React.use
  // kalo di nect js komponen bisa pake async

  //   jaid gini yan gpromise itu adalah params nya buka prorety slugnya
  //   const slug = await props.params.slug;
  //   itu salah
  // /jadi harus gini


//   ini yang benr
    // const {slug} = await props.params;

  // atau bisa juga gini tapi ni salah
//   tapi harus import * as React from react
// const slug = React.use(params.slug)
  //   // atua gini juga salah

    const params = await props.params;
  //   const slug = params.slug;
  console.log(params)

  return (
    <div>
      <h1>dari blog</h1>
      <p>slug single: {params.slug}</p>
    </div>
  );
}
