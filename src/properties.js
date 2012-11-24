        function setSize(w, h) {
            width  = w;
            height = h;
            halfWidth  = width / 2 << 0;
            halfHeight = height / 2 << 0;
            camX = halfWidth;
            camY = height;
            canvas.width = width;
            canvas.height = height;
        }

        function setOrigin(x, y) {
            originX = x;
            originY = y;
        }

        function setZoom(z) {
            zoom = z;
            size = TILE_SIZE << zoom;
            zoomAlpha = 1 - (zoom - minZoom) * 0.3 / (maxZoom - minZoom);
            zoomSimplify = max(1, (zoom - minZoom) * 2) + 1;
        }

        function setCam(x, y) {
            camX = x;
            camY = y;
        }

        function setStyle(style) {
            style = style || {};
            strokeRoofs = style.strokeRoofs !== undefined ? style.strokeRoofs : strokeRoofs;
            if (style.color || style.wallColor) {
                wallColor = Color.parse(style.color || style.wallColor);
            }
            if (style.roofColor !== undefined) { // allow explicit falsy values in order to remove roof color
                roofColor = Color.parse(style.roofColor);
            }
            render();
        }
