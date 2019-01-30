# Protocpiler

Protocpiler generates javascript or typescript files based on a proto contract.

It contains the protoc executable from Google which is used to create your wanted files.

### Installing

Using npm
```
npm install protocpiler --save
```

Using yarn
```
yarn add protocpiler
```


## Running

From proto to typescript
```
protocpiler typescript <input_dir> <output_dir>
```

From proto to javascript
```
protocpiler javascript <input_dir> <output_dir>
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

# TODO
 * Build with babel
