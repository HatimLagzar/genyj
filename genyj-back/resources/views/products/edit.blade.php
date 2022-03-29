@php
    /** @var \App\Models\Product $product */
@endphp

@extends('layout.app')
@section('content')
    <a href="{{ route('products.list') }}" class="btn btn-secondary"><i class="fa fa-long-arrow-left"></i> Back</a>
    <h2 class="mt-4">Edit Product</h2>
    <form action="{{ route('products.update', ['product' => $product->getId()]) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <div class="form-group mb-2">
            <label for="titleInput">Title</label>
            <input id="titleInput" type="text"
                   class="form-control {{ $errors->has('title') ? 'is-invalid' : '' }}" name="title"
                   value="{{ old('title', $product->getTitle()) }}">

            @error('title')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>

        <div class="form-group mb-2">
            <label for="priceInput">Price</label>
            <input id="priceInput" type="number" step=".1"
                   class="form-control {{ $errors->has('price') ? 'is-invalid' : '' }}" name="price"
                   value="{{ old('price', $product->getPrice() / 100) }}">

            @error('price')
            <div class="invalid-feedback">
                {{$message}}
            </div>
            @enderror
        </div>

        <div class="form-group mb-2">
            <label for="discountInput">Discount</label>
            <input id="discountInput" type="number"
                   class="form-control {{ $errors->has('discount') ? 'is-invalid' : '' }}" name="discount"
                   value="{{ old('discount', $product->getDiscount()) }}">

            @error('discount')
            <div class="invalid-feedback">
                {{$message}}
            </div>
            @enderror
        </div>

        <div class="form-group mb-2">
            <label for="descriptionInput">Description</label>
            <textarea name="description" id="descriptionInput" cols="30" rows="5"
                      class="form-control {{ $errors->has('description') ? 'is-invalid' : '' }}">{{ old('description', $product->getDescription()) }}</textarea>

            @error('description')
            <div class="invalid-feedback">
                {{$message}}
            </div>
            @enderror
        </div>

        <div class="mb-3">
            <label for="thumbnailFile" class="form-label">Thumbnail</label>
            <input class="form-control {{ $errors->has('thumbnail') ? 'is-invalid' : '' }}" name="thumbnail" type="file"
                   id="thumbnailFile" accept="image/*" value="{{ old('thumbnail') }}">

            @error('thumbnail')
            <div class="invalid-feedback">
                {{$message}}
            </div>
            @enderror
        </div>

        <div class="mb-3">
            <label for="extraImagesFiles" class="form-label">More Images</label>
            <input class="form-control {{ $errors->has('extraImages') ? 'is-invalid' : '' }}" name="extraImages[]"
                   type="file" id="extraImagesFiles" multiple
                   accept="image/*">

            @error('extraImages')
            <div class="invalid-feedback">
                {{$message}}
            </div>
            @enderror
        </div>

        <h3 class="mt-5">Variants</h3>

        <div id="variants">
            @foreach($product->getVariants() as $key => $variant)
                <div class="mb-3 variant-item">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="">Size</label>
                                <input name="variants[{{$key}}][size]" type="number" class="form-control" value="{{ $variant->getSize() }}">
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="">Stock</label>
                                <input name="variants[{{$key}}][stock]" type="number" class="form-control" value="{{ $variant->getStock() }}">
                            </div>
                        </div>
                        <div class="col-1 d-flex justify-content-center align-items-end">
                            <button type="button" role="button" class="btn btn-danger delete-variant"><i class="fa fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            @endforeach
            <button type="button" role="button" id="add-new-variant" class="btn w-100 btn-primary btn-sm mb-2"><i class="fa fa-plus"></i></button>
        </div>

        <button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Save</button>
    </form>
@endsection
