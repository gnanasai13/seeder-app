# Seeder-app

Welcome to the Seeder application! This is a React-based application developed using typescript, Material-UI and Webpack. The application allows users to interactively explore and select different loan contracts based on interest rates.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
  
## Getting Started

### Prerequisites

To run this application locally, you'll need the following tools:

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone this repository to your local machine.
2. Navigate to the directory and install project dependencies using `npm install`.

## Usage

1. Start the development server by running `npm start`.
2. This will launch the application in your default web browser. You can access it at http://localhost:4000.

## Folder Structure

The project follows an atomic design structure, which is a way of organizing components based on their complexity and hierarchy. The folder structure is as follows:

src/
  - components/
    - atoms/
    - molecules/
    - organisms/
    - templates/
    - pages/
  - themes/
  - App.tsx
  - index.tsx
  - index.html

`components`: Contains different levels of components, following the atomic design principles.
<br>
`themes`: Custom Material-UI themes and styling.
<br>
`App.tsx`: Application entry component.
<br>
`index.html`: HTML template for the application.
<br>
`index.tsx`: JavaScript entry point for the application.
<br>


