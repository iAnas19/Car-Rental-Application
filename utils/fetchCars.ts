export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "1961e5da89msh95a67054d5be9c9p10a9d1jsncb908a008a50",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
