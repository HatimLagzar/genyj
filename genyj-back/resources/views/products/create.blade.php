@php
    /** @var \Illuminate\Contracts\Pagination\LengthAwarePaginator|\App\Models\Product[] $products */
@endphp

@extends('layout.app')
@section('content')
    <a href="{{ route('products.list') }}" class="btn btn-secondary"><i class="fa fa-long-arrow-left"></i> Back</a>
    <h2 class="mt-4">Create Product</h2>
    <form action="{{ route('products.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="form-group mb-2">
            <label for="titleInput">Title</label>
            <input id="titleInput" type="text"
                   class="form-control {{ $errors->has('title') ? 'is-invalid' : '' }}" name="title"
                   value="{{ old('title') }}">

            @error('title')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>

        <div class="form-group mb-2">
            <label for="priceInput">Price</label>
            <input id="priceInput" type="number" step="any"
                   class="form-control {{ $errors->has('price') ? 'is-invalid' : '' }}" name="price"
                   value="{{ old('price') }}">

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
                   value="{{ old('discount') }}">

            @error('discount')
            <div class="invalid-feedback">
                {{$message}}
            </div>
            @enderror
        </div>

        <div class="form-group mb-2">
            <label for="descriptionInput">Description</label>
            <textarea name="description" id="descriptionInput" cols="30" rows="5"
                      class="form-control {{ $errors->has('description') ? 'is-invalid' : '' }}">{{ old('description') }}</textarea>

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
            <button type="button" role="button" id="add-new-variant" class="btn w-100 btn-primary btn-sm mb-2"><i class="fa fa-plus"></i></button>
        </div>

        <button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Save</button>
    </form>
@endsection
