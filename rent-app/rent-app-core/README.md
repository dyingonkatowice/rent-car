### 29.12.2024

# Things to add:

1. Search.

- When searchin in bottom gallery display searched cars.
- Add useState which displays bottom list as normal and when search it displays filtered resoults.
- when search is clicked/ picked/ done reset useState in other function so other lists looks like in base State.

2. Global css Styles/ dark mode - light mode

- Add global styling
- Add toggle switch to switch colors
- Add basic for user interface

3. Button next to search button for extended seach that filters cars that have specific for eg year etc "advanced search"

- add button
- implement filtering, reuse existing

##### Tutorial

###### Dynamic Theming

[Themes picked tailwind + react + saving on local storage](https://www.youtube.com/watch?v=8nvRWuLmcD4&ab_channel=CodeRadiance)

## Bartosz

```javascript
setCount((prevCount) => (prevCount + 1) % recomendedCar.length);
```

# Explanation:

## prevCount + 1:

- prevCount is the current value of the count state.
- Adding 1 increments the count.

## % recomendedCar.length:

- The % (modulus) operator returns the remainder of a division.
- If prevCount + 1 equals recomendedCar.length (i.e., goes beyond the last index), the modulus operation wraps the value back to 0.

## Result:

- This ensures count stays within the valid range of indices for the recomendedCar array (from 0 to recomendedCar.length - 1).

# Example:

## Assume recomendedCar.length = 3 and prevCount cycles through values 0, 1, 2.

- When prevCount = 0:
- (prevCount + 1) % 3 = (0 + 1) % 3 = 1

- When prevCount = 1:
- (prevCount + 1) % 3 = (1 + 1) % 3 = 2

- When prevCount = 2:
- (prevCount + 1) % 3 = (2 + 1) % 3 = 0 (wraps back to the start)

```<div className="container mx-auto px-4 w-[1300px]">
          {/* Search Bar */}
          <div className="mb-8 pt-8">
            {/* Value which you type in ( basic one from useState) */}
            {/* On change ( when you type it uses function to filter) */}
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for cars..."
              className="w-full p-4 rounded-lg bg-[#1E2432] border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Filtered Results */}

          {/* This is pretty basic. You just use filtered cars that gets set on each Change in onChange={handleSeacrchChange} */}
          {searchQuery && filteredCars.length > 0 ? (
            <ul className="space-y-4">
              {filteredCars.map((car) => (
                <li key={car.id} className="bg-[#1E2432] rounded-lg p-3 m-2">
                  <h3 className="text-xl font-bold mb-2">{car.title}</h3>
                  <p className="text-gray-400 pb-2">
                    {String(car.year)} - {car.gearbox}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            // Do nothing or show a message when input is empty
            <p className="text-gray-500 pb-10">
              Please type something to search...
            </p>
          )}
        </div>
```

### This code plus this states and functions

```

  // Search Bar filtering (chatgpt helped)

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);

  const handleSearchChange = (e) => {
    //getting Input
    const query = e.target.value;

    //Setting it for useState ( what you type is set there )
    setSearchQuery(query);

    // Filter cars only if there is text in the search field
    if (query.trim() === "") {
      //If there is no text after triming then it displays nothing( it displays whole list without it )
      setFilteredCars([]); // Show nothing when the input is empty
    } else {
      //filtering cars setting text from input to lover case and text in object, so when it includes the text it can be displyed
      const filtered = cars.filter((car) =>
        car.title.toLowerCase().includes(query.toLowerCase())
      );

      //setting displayed text as filtered value
      setFilteredCars(filtered);
    }
  };

```
