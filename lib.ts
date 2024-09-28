export default function println(
  helper: string,
  data: any,
  shouldShowHelper: boolean = true
) {
  const formattedLog = JSON.stringify(data, null, 2);

  if (shouldShowHelper) {
    console.log(`${helper} =>`, formattedLog);
  } else {
    console.log(formattedLog);
  }
}
