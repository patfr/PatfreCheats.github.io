# How to use

Note: Join the discord for further help if this does not help and to see what versions are supported by this program.

To start you need to paste your save file into where it says "Insert save file here". (Note: Only works with plain text and any changes to your save file will make it un-readable for the program and you cannot drag and drop files into it)

After you do that you need to press "Decode" this will read the file and do checks to see if it is valid. (Note: if nothing happens check the console (to open console use ctrl + shift + i) and see what it says)

if everything went well you should now see that all the values will appear on the list to the right and you can now start editing your save file's value.

- If the value have 2 input fields. Note: Values with 2 fields are in scientific notation where the first field is what's before e+ and 2nd field is what's after the e+ also note that only 2nd field supports scientific notation in of itself also 2nd field ONLY accepts scientific notation with e+ not with e.
  - Field 1 (the most left input field): Ranges between 0 and 10 (0 inclusive, 10 exclusive)
  - Field 2 (the most right input field): Ranges between 0 and 1e+307 (0 inclusive, 1e+307 inclusive)

# Custom error codes meaning
Note: If the message is red it means a Javascript error has accured which is not the same as these below
- Error #100 - This means that either the given data was not in base64 or it included characters or other things that shouldn't be there.
- Error #101 - This means that the decoded data was not in a Javascript Dictionary form. Example of dictionary {"Key":"Value"}.
- Error #102 - This means that the Javascript Dictionary did not contain a "version" key.
- Error #103 - This means that the decoded save file's version is not supported by the program as of now.
- Error #104 - This means that the Javascript Dictionary did not contain the shown key. Note: the error says index but just know it is the same.
- Error #105 - This means some unknown problem has accured.
