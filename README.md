# Image Resizer and Converter

A simple web application to resize images to a maximum width of 1200px, maintain the aspect ratio, convert them to `.webp` format, ensure the file size is under 100KB, and save them to the specified directory.

## Features

- Drag and drop image files for easy uploading.
- Resize images to a maximum width of 1200px while maintaining aspect ratio.
- Convert images to `.webp` format.
- Ensure the file size is under 100KB.
- Save the processed images to the specified directory with the same filename but a `.webp` extension.
- Uses Bootstrap for styling.

## Usage

### Prerequisites

- Node.js installed on your machine.
- npm (Node Package Manager) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/image-resizer-converter.git
   cd image-resizer-converter
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Start the server:

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

### Using the Application

1. Drag and drop your image files into the designated area or use the file input to select multiple image files.
2. Enter the target directory where you want to save the resized images.
3. Click the "Upload" button.
4. The images will be resized, converted to `.webp` format, and saved to the specified directory.

### Project Structure

/image-resizer-converter
|-- index.js
|-- package.json
|-- public
| |-- index.html
|-- uploads (this folder will be created by multer when needed)

## Contributing

This project is open source and contributions are welcome. Please fork the repository, make your changes, and submit a pull request.

## Author

Mohammed Abdul Sattar Milon, CEO, Alignax Digital  
Email: [masmilonbd@gmail.com](mailto:masmilonbd@gmail.com)

## License

This project is licensed under the MIT License.
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
